import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from "../components/sidebar";
import { Image, Card, Divider, Button} from "@nextui-org/react";

function Homepage() {
  

  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <section className='bg-home'>
        <div id="div-center" className="head">
          <Card shadow style={{ width: '925px', padding: '20px', textAlign: 'center', border: '7px solid #FFE0B2', borderRadius: '10px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#f57c00', marginBottom: '20px', textShadow: 'none' }}>TasteBuds</h1>
            <Divider className="my-4" 
            style={{ height: '4px', backgroundColor: '#FF5252' }} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                  src="https://th.bing.com/th/id/OIF.Mk8ebq5TyOIKuftVN4mhWw?rs=1&amp;pid=ImgDetMain" 
                  alt="TasteBuds Logo"
                  width={200}
                  height={200}
                  style={{ borderRadius: '50%', marginBottom: '20px' }} 
              />
            </div>
            <Divider className="my-4" 
            style={{ height: '4px', backgroundColor: '#FF5252' }} />
            <div style={{ 
              fontSize: '18px', 
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#212121',
              marginBottom: '20px', // Adding bottom margin for spacing
              textShadow: 'none', 
            }}>
              Our Mission
            </div>
            <p style={{ marginBottom: '14px', textShadow: 'none', fontSize: '16px' }}>
              TasteBuds is a platform for discovering recipes that caters to your preferences. Our mission is to inspire
              people to cook delicious meals at home by providing easy-to-follow recipes.
            </p>
            <p style={{ marginBottom: '14px', textShadow: 'none', fontSize: '16px'}}>
              Whether you&apos;re a seasoned chef or just starting out in the kitchen, TasteBuds has something for everyone.
            </p>
            <Divider className="my-4" style={{ height: '4px', backgroundColor: '#FF5252' }} />
            <div style={{ 
              fontSize: '18px', 
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#212121',
              marginBottom: '20px', 
              textShadow: 'none', 
            }}>
              What You&apos;ll Find Here
            </div>
            <p style={{ marginBottom: '14px', textShadow: 'none', fontSize: '16px' }}>
              Here, you will find cuisines from all walks of life. Whether you&apos;re looking to make a certain cuisine type
              or whether you are on a certain diet, TasteBuds will suit your needs. 
            </p>
            <p style={{ marginBottom: '14px', textShadow: 'none', fontSize: '16px' }}>
              Have a certain ingredient close to its expiration date? An ingredient you&apos;re never able to use up? An ingredient you&apos;re excited to try out? 
              TasteBuds got you covered. With our ingredient search, you&apos;ll be sure to hone down to recipes of your specific criteria. Just be sure to save your favorite recipes, 
              rate them and give your thoughts by commenting on recipes here.
            </p>
            <Divider className="my-4" style={{ height: '4px', backgroundColor: '#FF5252' }} />
            <div style={{ 
              fontSize: '18px', 
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#212121',
              marginBottom: '20px', 
              textShadow: 'none', 
            }}>
              What Are You Waiting For?
            </div>
            <Link href="/discover">
              <Button className="bg-[#FF9800]  text-white" size="lg">Discover Here</Button>
            </Link>
          </Card>
        </div>
      </section>
      <style jsx>{`
      .bg-home {
        background: url('https://wallpapers.com/images/hd/best-food-background-fw4yftxqm66w1bg1.jpg') no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        overflow-y: auto;
      }        
      `}</style>
    </div>
  );
}

export default Homepage;