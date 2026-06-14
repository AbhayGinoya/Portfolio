import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { getDocs, addDoc, collection, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase-comment';
import { MessageCircle, UserCircle2, Loader2, AlertCircle, Send } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const Comment = memo(({ comment, formatDate }) => (
  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-150 dark:border-white/5 hover:bg-slate-100/50 dark:hover:bg-white/10 transition-all duration-200 group">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors">
        <UserCircle2 className="w-5 h-5" />
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex items-center justify-between gap-4 mb-1">
          <h4 className="font-bold text-slate-800 dark:text-white text-sm truncate">{comment.userName}</h4>
          <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 whitespace-nowrap">
            {formatDate(comment.createdAt)}
          </span>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm break-words leading-relaxed">
          {comment.content}
        </p>
      </div>
    </div>
  </div>
));

const CommentForm = memo(({ onSubmit, isSubmitting }) => {
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const textareaRef = useRef(null);

  const handleTextareaChange = useCallback((e) => {
    setNewComment(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!newComment.trim() || !userName.trim()) return;
    
    onSubmit({ newComment, userName });
    setNewComment('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  }, [newComment, userName, onSubmit]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your display name"
          className="w-full p-3 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-300"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Comment / Feedback <span className="text-red-500">*</span>
        </label>
        <textarea
          ref={textareaRef}
          value={newComment}
          onChange={handleTextareaChange}
          placeholder="Leave a message or feedback..."
          className="w-full p-4 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-300 resize-none min-h-[90px]"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full h-11 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-xl font-bold text-white text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Posting...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Post Comment</span>
          </>
        )}
      </button>
    </form>
  );
});

const Commenter = () => {
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  useEffect(() => {
    const commentsRef = collection(db, 'portfolio-comments');
    const q = query(commentsRef, orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsData);
    }, (err) => {
      console.error("Comments subscribe error: ", err);
    });

    return () => unsubscribe();
  }, []);

  const handleCommentSubmit = useCallback(async ({ newComment, userName }) => {
    setError('');
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'portfolio-comments'), {
        content: newComment,
        userName,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      setError('Failed to submit comment. Please check internet connection.');
      console.error('Error adding comment: ', error);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const formatDate = useCallback((timestamp) => {
    if (!timestamp) return 'Just now';
    let date;
    try {
      date = timestamp.toDate();
    } catch (e) {
      date = new Date(timestamp);
    }
    const now = new Date();
    const diffMinutes = Math.floor((now - date) / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }, []);

  return (
    <div className="w-full bg-slate-50/50 dark:bg-white/[0.01] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 flex flex-col h-full shadow-sm">
      <div className="p-4 border-b border-slate-200 dark:border-white/5 bg-slate-100/40 dark:bg-white/[0.02] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <MessageCircle className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-800 dark:text-white text-base">
            Guestbook <span className="text-xs font-semibold text-indigo-650 dark:text-indigo-400 ml-1">({comments.length} posts)</span>
          </h3>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-6">
        {error && (
          <div className="flex items-center gap-2 p-3 text-xs text-red-600 dark:text-red-400 bg-red-500/5 border border-red-500/10 rounded-xl">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="font-semibold">{error}</p>
          </div>
        )}
        
        <div>
          <CommentForm onSubmit={handleCommentSubmit} isSubmitting={isSubmitting} />
        </div>

        <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1 scrollbar-thin">
          {comments.length === 0 ? (
            <div className="text-center py-10">
              <UserCircle2 className="w-10 h-10 text-blue-550 dark:text-blue-400 mx-auto mb-2 opacity-50" />
              <p className="text-slate-400 dark:text-slate-500 text-xs">No comments yet. Leave the first one!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <Comment 
                key={comment.id} 
                comment={comment} 
                formatDate={formatDate}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Commenter;