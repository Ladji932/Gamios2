import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import gsap from 'gsap';
import { Link, useNavigate } from 'react-router-dom';  // Import de useNavigate

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const welcomeRef = useRef(null);
  const navigate = useNavigate(); // Initialisation de navigate

  // Vérification si l'utilisateur est déjà connecté
  useEffect(() => {
    const token = localStorage.getItem('tokenLogin');
    if (token) {
      setIsLoggedIn(true);  // Si le token est présent, l'utilisateur est connecté
      navigate('/');  // Redirection vers la page d'accueil (ou la page que vous souhaitez)
    }
  }, [setIsLoggedIn, navigate]); // Ajoutez 'navigate' dans le tableau des dépendances


  useEffect(() => {
    if (showWelcome && welcomeRef.current) {
      gsap.set(welcomeRef.current, { clearProps: 'all' });

      gsap.fromTo(
        welcomeRef.current,
        {
          scale: 0,
          opacity: 0,
          rotation: -10,
          filter: 'blur(10px)',
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'elastic.out(1, 0.3)',
          onComplete: () => {
            gsap.to(welcomeRef.current, {
              textShadow: '0 0 10px rgba(0,0,0,0.5)',
              duration: 0.3,
            });
          },
        }
      );
    }
  }, [showWelcome]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password,
      });

      const data = response.data;
      localStorage.setItem('tokenLogin', data.access_token);
      setIsLoggedIn(true);
      setErrorMessage('');
      setShowWelcome(true);

      setTimeout(() => {
        setShowWelcome(false);
        navigate('/');  // Redirection vers la page d'accueil (ou la page que vous souhaitez)
      }, 3000); // L'animation disparaît après 3 secondes
    } catch (error) {
      console.error(
        "Erreur de connexion:",
        error.response?.data?.error || error.message
      );
      setErrorMessage("Identifiants invalides. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      {showWelcome && (
        <div
          ref={welcomeRef}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <h1
            className="text-6xl font-bold text-indigo-600"
            style={{
              fontFamily: 'Arial Black, sans-serif',
              background: 'linear-gradient(45deg, #4F46E5, #818CF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            Bienvenue {username}!
          </h1>
        </div>
      )}

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Connexion
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm text-center">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Se connecter
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
                  <Link to="/register" className="text-indigo-600 hover:underline">
                  Pas de compte ?
                  </Link>          <span className="text-indigo-600 cursor-pointer hover:underline">
                  </span>
                </p>
      </div>
    </div>
  );
}

export default Login;
