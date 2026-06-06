// AuthModal.jsx





import React from 'react';

const AuthModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl animate-in fade-in zoom-in-95 duration-200">
                <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-4">
                        <i className="bi bi-lock-fill text-xl"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Authentication Required</h3>
                    <p className="mt-2 text-sm text-gray-500">
                        Please sign in to your account first to add items and build your personalized food cart selection!
                    </p>
                </div>
                <div className="mt-6 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <button
                        type="button"
                        onClick={onConfirm}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
                    >
                        Yes, Log In
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-700 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50"
                    >
                        Don't Log In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;