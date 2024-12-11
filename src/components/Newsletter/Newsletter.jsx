import { useState } from 'react';
import axios from 'axios';

import "./Newsletter.css"
function Newsletter() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name) {
            setError('Preencha o nome');
            return;
        }

        if (!email) {
            setError('Preencha o email');
            return;
        }

        const response = await axios.post('https://corebiz-test-server.onrender.com/api/v1/newsletter', {
            name,
            email,
        });

        if(response.status === 200){
            setSuccess(response.data.message);
            setName('');
            setEmail('');
        }
        
    };

    return (
        <div className="newsletter">
            <h4>Participe de nossas news com promoções e novidades!</h4>

            <div className="newsletter-container">
                <form onSubmit={submit}>
    
                    <input
                        type="text"
                        id="name"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
          
            
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
       
                    <button type="submit">
                        Eu quero!
                    </button>

                </form>

                {error && <p>{error}</p>}
                {success && <p >{success}</p>}
            </div>
        </div>
    )
  }
  
  export default Newsletter