'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const Careers = () => {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Join Our Creative Team</h1>
                    <p>
                        At VisualTreat, we’re always looking for passionate, talented individuals to help us redefine design, print, and events. Let’s create something extraordinary together.
                    </p>
                    <a href="#open-positions" className={styles.primaryBtn}>View Open Positions</a>
                </div>
                <div className={styles.heroImage}>
                    <Image
                        src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Creative Team Collaboration"
                        width={600}
                        height={400}
                    />
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className={styles.whyJoin}>
                <h2>Why Work With Us?</h2>
                <div className={styles.whyJoinGrid}>
                    <div className={styles.whyCard}>
                        <Image
                            src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="Collaborative Environment"
                            width={100}
                            height={100}
                        />
                        <h3>Collaborative Environment</h3>
                        <p>Work with a team of creative professionals who inspire and support each other.</p>
                    </div>
                    <div className={styles.whyCard}>
                        <Image
                            src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="Growth Opportunities"
                            width={100}
                            height={100}
                        />
                        <h3>Growth Opportunities</h3>
                        <p>We invest in your growth with training, mentorship, and career development programs.</p>
                    </div>
                    <div className={styles.whyCard}>
                        <Image
                            src="https://images.pexels.com/photos/269321/pexels-photo-269321.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="Exciting Projects"
                            width={100}
                            height={100}
                        />
                        <h3>Exciting Projects</h3>
                        <p>Be part of impactful projects that challenge your creativity and skills.</p>
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section id="open-positions" className={styles.positions}>
                <h2>Open Positions</h2>
                <div className={styles.positionsGrid}>
                    {[
                        {
                            title: 'Graphic Designer',
                            location: 'Remote',
                            type: 'Full-Time',
                            description: 'Create stunning visuals for branding, marketing, and digital campaigns.',
                        },
                        {
                            title: 'Event Manager',
                            location: 'On-Site',
                            type: 'Full-Time',
                            description: 'Plan and execute memorable events for corporate and personal clients.',
                        },
                        {
                            title: 'Print Specialist',
                            location: 'On-Site',
                            type: 'Part-Time',
                            description: 'Ensure high-quality prints for brochures, banners, and packaging.',
                        },
                    ].map((position, index) => (
                        <div key={index} className={styles.positionCard}>
                            <h3>{position.title}</h3>
                            <p><strong>Location:</strong> {position.location}</p>
                            <p><strong>Type:</strong> {position.type}</p>
                            <p>{position.description}</p>
                            <a href="/apply" className={styles.applyBtn}>Apply Now</a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.finalCta}>
                <div className={styles.finalCtaContent}>
                    <h2>Shape the Future with Us</h2>
                    <p>
                        At VisualTreat, we’re not just building a team—we’re building a community of innovators and creators. Let’s make an impact together.
                    </p>
                </div>
                <div className={styles.finalCtaImage}>
                    <Image
                        src="https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Team Collaboration"
                        width={600}
                        height={400}
                    />
                </div>
            </section>
        </main>
    );
};

export default Careers;