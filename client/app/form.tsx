'user client'
import Link from "next/link";
import { FormEvent } from "react";
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/navigation';

export default function Form(){
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await signIn('credentials', {
            username: formData.get('username'),
            password: formData.get('password'),
            redurect: false,
        });
        console.log({response});
        if(!response?.error){
            router.push("/");
            router.refresh();
        }
    };
    return(
        <div>
            <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>TasteBuds</header>
        <ul>
            <li><Link href="/"><i className="fas fa-home"></i>Home</Link></li>    
            <li><a href="#"><i className="fas fa-star"></i>Saved Recipes</a></li>
            <li><a href="#"><i className="fas fa-cog"></i>User Settings</a></li>
            <li><Link href="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
       </div>
      <section></section>
      <div className="main">
        <h3>Login</h3>
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="user"><b>Username: </b></label>
          <input type="text"
              id="username"
              name="username"
              placeholder="Enter your Username" required />
          <label htmlFor="password"><b>Password: </b></label>
            <input type="password"
                id="password"
                name="password"
                placeholder="Enter your Password" required />
            <div className="wrap">
                <button type="submit">Submit</button>
            </div>
        </form>
        <p>Not registered? Create an account <Link href="/signup" style={{textDecoration: "none"}}>here</Link></p>
    </div>
        </div>
    )
}