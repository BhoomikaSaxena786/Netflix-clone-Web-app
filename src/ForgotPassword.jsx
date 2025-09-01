import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');
        
        // Simple email format validation
        if (!email.includes('@') || !email.includes('.')) {
            setError('Please enter a valid email address.');
            setLoading(false);
            return;
        }

        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            setMessage('A password reset link has been sent to your email. Please check your inbox.');
            setEmail(''); // Clear the input field on success
        } catch (err) {
            if (err.code === 'auth/user-not-found') {
                setError('No user found with that email address. Please try again.');
            } else {
                setError('Failed to send password reset email. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="h-screen w-full bg-cover bg-center relative"
            style={{
                backgroundImage: "url('/netflix-bg.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                <div className="bg-black bg-opacity-70 p-8 rounded-md w-full max-w-md text-white">
                    <h2 className="text-3xl font-bold mb-6">Forgot Password?</h2>
                    <form onSubmit={handlePasswordReset}>
                        <p className="text-gray-400 text-sm mb-6">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                        <input
                            type="email"
                            placeholder="Email address"
                            required
                            className="mb-4 w-full p-3 rounded bg-gray-800 border border-gray-700"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                        <button 
                            type="submit"
                            disabled={loading}
                            className={`w-full p-3 rounded font-semibold ${
                                loading ? 'bg-red-800 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
                            }`}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </div>
                            ) : (
                                'Send Reset Link'
                            )}
                        </button>
                    </form>

                    {message && (
                        <div className="mt-4 p-3 bg-green-500 bg-opacity-20 text-green-400 rounded-md text-center font-semibold text-sm">
                            {message}
                        </div>
                    )}
                    {error && (
                        <div className="mt-4 p-3 bg-red-500 bg-opacity-20 text-red-400 rounded-md text-center font-semibold text-sm">
                            {error}
                        </div>
                    )}
                    
                    <div className="mt-6 text-center text-sm">
                        <Link to="/signin" className="font-medium text-red-500 hover:text-red-400">
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;