import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HomePage = () => {
    const { scrollY } = useViewportScroll();
    const backgroundY = useTransform(scrollY, [0, 300], [0, 100]);
    const backgroundScale = useTransform(scrollY, [0, 300], [1, 1.1]);
    const featuresRef = useRef(null);

    const [shouldBounce, setShouldBounce] = useState(false);

    const scrollToFeatures = () => {
        const anchor = document.getElementById('scroll-anchor');
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldBounce(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>

            {/* Hero Section */}
            <motion.div
                style={{
                    backgroundImage: 'url("/workout-bg.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    position: 'relative',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    y: backgroundY,
                    scale: backgroundScale
                }}
            >
                {/* Dark overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }} />

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    <h1 className="mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                        Track Your Progress, Crush Your Goals
                    </h1>
                    <p className="mb-4" style={{ fontSize: '1.3rem' }}>
                        Welcome to FitTrack — stay consistent, get stronger, and celebrate every win!
                    </p>

                    {/* Start Button */}
                    <motion.button
                        onClick={scrollToFeatures}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="btn btn-success btn-lg"
                    >
                        Start Your Journey
                    </motion.button>

                    {/* Bouncing Arrow */}
                    <motion.div
                        onClick={scrollToFeatures}
                        style={{ marginTop: '40px', cursor: 'pointer' }}
                        animate={shouldBounce ? { y: [0, 15, 0] } : {}}
                        transition={{ repeat: shouldBounce ? Infinity : 0, duration: 2 }}
                    >
                        <ChevronDown size={40} />
                    </motion.div>
                </motion.div>
            </motion.div>
            <div id="scroll-anchor" style={{ height: '100px', backgroundColor: '#121212' }}></div>

            {/* Features Section */}
            <Container
                ref={featuresRef}
                fluid
                style={{ backgroundColor: '#121212', padding: '40px 0' }}
                className="text-center"
            >

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <h2 id="features-header" className="mb-5" style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#fff' }}>
                        Why Choose FitTrack?
                    </h2>
                    <Row className="g-4">
                        {[
                            { title: "Create Workouts", text: "Build custom workouts tailored to your fitness journey." },
                            { title: "Track Progress", text: "Visualize your strength gains and milestones easily." },
                            { title: "Break Records", text: "Push your limits and celebrate every personal best!" },
                        ].map((feature, index) => (
                            <Col key={index} md={4}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="feature-card"
                                >
                                    <div className="glass-card shadow-lg p-4 rounded-4 h-100">
                                        <h3 style={{ fontWeight: '600', marginBottom: '1rem', color: '#fff' }}>{feature.title}</h3>
                                        <p style={{ color: '#ccc' }}>{feature.text}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>

                    {/* Motivation Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-5 p-4 rounded-4 shadow-lg"
                        style={{ backgroundColor: '#1c1c1c', color: '#f0f0f0', maxWidth: '800px', margin: '0 auto' }}
                    >
                        <h4 className="mb-3" style={{ fontStyle: 'italic' }}>
                            "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t."
                        </h4>
                        <p className="text-end mb-0">— FitTrack Team</p>
                    </motion.div>
                </div>
            </Container>

        </div>
    );
};

export default HomePage;
