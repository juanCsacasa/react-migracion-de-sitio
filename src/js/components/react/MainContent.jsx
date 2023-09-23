import React from 'react';
import { Card } from './card';
import { events } from './config';


const MainContent = () => {
    return (
        <main id="main-gallery" className="main-gallery main-container">
            <ol id='gallery' className="container error-container gallery home-gallery">
                {events.map((event) => (
                    <Card key={event.id} {...event} />
                ))}
            </ol>
        </main>
    )
}

export { MainContent };
