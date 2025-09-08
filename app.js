// Enhanced QPAudioEraser Presentation Navigation
class PresentationController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 20;
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.slideCounter = document.getElementById('slide-counter');
        
        this.init();
    }
    
    init() {
        // Ensure buttons exist before adding event listeners
        if (this.prevBtn && this.nextBtn && this.slideCounter) {
            // Set up event listeners with proper binding
            this.prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.previousSlide();
            });
            
            this.nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.nextSlide();
            });
            
            // Also try mousedown events as fallback
            this.prevBtn.addEventListener('mousedown', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.previousSlide();
            });
            
            this.nextBtn.addEventListener('mousedown', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.nextSlide();
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => this.handleKeypress(e));
            
            // Initialize display
            this.updateDisplay();
            
            // Prevent default scrolling on arrow keys
            document.addEventListener('keydown', (e) => {
                if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
                    e.preventDefault();
                }
            });
            
            // Add hover effects for enhanced slides
            this.addEnhancedInteractions();
            
            console.log('Enhanced QPAudioEraser Presentation loaded - 20 slides with enhanced visuals ready');
            console.log('Button references:', { prevBtn: this.prevBtn, nextBtn: this.nextBtn });
        } else {
            console.error('Navigation buttons not found, retrying...', {
                prevBtn: this.prevBtn,
                nextBtn: this.nextBtn,
                slideCounter: this.slideCounter
            });
            // Retry after a short delay
            setTimeout(() => this.init(), 100);
        }
    }
    
    addEnhancedInteractions() {
        // Add interactive effects for enhanced slides
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px) scale(1.02)';
                item.style.boxShadow = '0 15px 30px rgba(50, 164, 184, 0.4)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
                item.style.boxShadow = '0 10px 20px rgba(50, 164, 184, 0.3)';
            });
        });

        // Add pulse animation to critical statistics
        const criticalStats = document.querySelectorAll('.stat-box.critical');
        criticalStats.forEach(stat => {
            stat.addEventListener('mouseenter', () => {
                stat.style.animation = 'pulse 1s infinite';
            });
            
            stat.addEventListener('mouseleave', () => {
                stat.style.animation = 'none';
            });
        });

        // Add quantum visualization interactions
        const quantumConcepts = document.querySelectorAll('.quantum-concept');
        quantumConcepts.forEach(concept => {
            concept.addEventListener('click', () => {
                concept.style.animation = 'quantumGlow 2s ease-in-out';
                setTimeout(() => {
                    concept.style.animation = 'none';
                }, 2000);
            });
        });

        // Add architecture flow animations
        const archSteps = document.querySelectorAll('.arch-step');
        let stepDelay = 0;
        archSteps.forEach(step => {
            setTimeout(() => {
                step.style.animation = 'slideInFromBottom 0.5s ease-out';
            }, stepDelay);
            stepDelay += 200;
        });
    }
    
    nextSlide() {
        console.log(`Next slide clicked: current=${this.currentSlide}, total=${this.totalSlides}`);
        if (this.currentSlide < this.totalSlides) {
            this.currentSlide++;
            this.updateDisplay();
            this.animateTransition('next');
            this.triggerSlideSpecificAnimations();
        }
    }
    
    previousSlide() {
        console.log(`Previous slide clicked: current=${this.currentSlide}`);
        if (this.currentSlide > 1) {
            this.currentSlide--;
            this.updateDisplay();
            this.animateTransition('prev');
            this.triggerSlideSpecificAnimations();
        }
    }
    
    goToSlide(slideNumber) {
        if (slideNumber >= 1 && slideNumber <= this.totalSlides) {
            console.log(`Going to slide ${slideNumber}`);
            this.currentSlide = slideNumber;
            this.updateDisplay();
            this.animateTransition('direct');
            this.triggerSlideSpecificAnimations();
        }
    }
    
    triggerSlideSpecificAnimations() {
        // Enhanced animations for specific slides
        switch(this.currentSlide) {
            case 1:
                this.animateTitleSlide();
                break;
            case 2:
                this.animateTimelineSlide();
                break;
            case 3:
                this.animateArchitectureSlide();
                break;
            case 4:
                this.animateUnlearningPipeline();
                break;
            case 5:
                this.animateQuantumConcepts();
                break;
            default:
                // Standard animations for other slides
                this.animateSlideContent();
                break;
        }
    }
    
    animateTitleSlide() {
        const title = document.querySelector('.gradient-title');
        const institutionalBranding = document.querySelector('.institutional-branding');
        const conferenceDetails = document.querySelector('.conference-details');
        
        if (title) {
            title.style.animation = 'titleGlow 3s ease-in-out infinite';
        }
        
        if (institutionalBranding) {
            institutionalBranding.style.animation = 'slideInFromLeft 1s ease-out';
        }
        
        if (conferenceDetails) {
            conferenceDetails.style.animation = 'slideInFromRight 1s ease-out 0.5s both';
        }
    }
    
    animateTimelineSlide() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = 'fadeInUp 0.6s ease-out both';
            }, index * 200);
        });
        
        const criticalStat = document.querySelector('.stat-box.critical h3');
        if (criticalStat) {
            setTimeout(() => {
                criticalStat.style.animation = 'countUp 2s ease-out';
            }, 1000);
        }
    }
    
    animateArchitectureSlide() {
        const archSteps = document.querySelectorAll('.arch-step');
        const flowArrows = document.querySelectorAll('.flow-arrow');
        
        archSteps.forEach((step, index) => {
            setTimeout(() => {
                step.style.animation = 'slideInFromBottom 0.6s ease-out both';
            }, index * 300);
        });
        
        flowArrows.forEach((arrow, index) => {
            setTimeout(() => {
                arrow.style.animation = 'fadeIn 0.3s ease-out both';
            }, (index + 1) * 300 + 150);
        });
        
        // Animate threat items
        const threatItems = document.querySelectorAll('.threat-item');
        threatItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = 'pulseIn 0.5s ease-out both';
            }, 2000 + index * 150);
        });
    }
    
    animateUnlearningPipeline() {
        const pipelineLabels = document.querySelectorAll('.data-label');
        const comparisonItems = document.querySelectorAll('.comparison-item');
        
        pipelineLabels.forEach((label, index) => {
            setTimeout(() => {
                label.style.animation = 'slideInFromSide 0.5s ease-out both';
            }, index * 200);
        });
        
        comparisonItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = 'scaleIn 0.6s ease-out both';
            }, 800 + index * 300);
        });
    }
    
    animateQuantumConcepts() {
        const quantumConcepts = document.querySelectorAll('.quantum-concept');
        const analogyPair = document.querySelector('.analogy-pair');
        const advantageItems = document.querySelectorAll('.advantage-item');
        
        quantumConcepts.forEach((concept, index) => {
            setTimeout(() => {
                concept.style.animation = 'quantumFloat 0.8s ease-out both';
            }, index * 300);
        });
        
        if (analogyPair) {
            setTimeout(() => {
                analogyPair.style.animation = 'fadeInScale 1s ease-out both';
            }, 1200);
        }
        
        advantageItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = 'slideInFromBottom 0.6s ease-out both';
            }, 2000 + index * 200);
        });
    }
    
    animateSlideContent() {
        // General animation for other slides
        const currentSlideElement = document.getElementById(`slide-${this.currentSlide}`);
        if (currentSlideElement) {
            const contentElements = currentSlideElement.querySelectorAll('h2, h3, .content-section, .result-box, .finding-item');
            contentElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.animation = 'fadeInUp 0.5s ease-out both';
                }, index * 100);
            });
        }
    }
    
    updateDisplay() {
        // Hide all slides
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active');
        });
        
        // Show current slide
        const currentSlideElement = document.getElementById(`slide-${this.currentSlide}`);
        if (currentSlideElement) {
            currentSlideElement.classList.add('active');
        } else {
            console.error(`Slide ${this.currentSlide} not found!`);
        }
        
        // Update counter
        if (this.slideCounter) {
            this.slideCounter.textContent = `${this.currentSlide} / ${this.totalSlides}`;
        }
        
        // Update button states
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentSlide === 1;
            this.prevBtn.style.opacity = this.currentSlide === 1 ? '0.5' : '1';
        }
        
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentSlide === this.totalSlides;
            this.nextBtn.style.opacity = this.currentSlide === this.totalSlides ? '0.5' : '1';
        }
        
        // Scroll to top of slide content
        const activeSlide = document.querySelector('.slide.active');
        if (activeSlide) {
            activeSlide.scrollTop = 0;
        }
        
        // Update page title with slide info
        this.updatePageTitle();
        
        // Update progress indicator
        this.updateProgressIndicator();
    }
    
    updatePageTitle() {
        const slideTitles = [
            'Enhanced Title Slide - QPAudioEraser',
            'Enhanced Motivation & Problem Statement',
            'Enhanced Audio Biometrics Privacy Challenges',
            'Enhanced Machine Unlearning Background',
            'Enhanced Quantum-Inspired ML Motivation',
            'Our Contribution: QPAudioEraser',
            'Phase 1: Destructive Interference',
            'Phase 2: Superposition-Based Labels',
            'Phase 3: Quantum Loss Function',
            'Phase 4: Entanglement-Inspired Mixing',
            'Algorithm Overview',
            'Experimental Setup',
            'Evaluation Metrics',
            'Single-Class Results',
            'Multi-Class & Sequential Results',
            'Accent Unlearning Results',
            'Ablation Study',
            'Key Findings',
            'Related Work Comparison',
            'Conclusion & Future Work'
        ];
        
        const slideTitle = slideTitles[this.currentSlide - 1] || 'QPAudioEraser Presentation';
        document.title = `${this.currentSlide}/20: ${slideTitle} - IJCB 2025`;
    }
    
    animateTransition(direction) {
        const activeSlide = document.querySelector('.slide.active');
        if (!activeSlide) return;
        
        // Add transition class for animation
        activeSlide.style.transform = 'translate(-50%, -50%) scale(1)';
        activeSlide.style.opacity = '1';
        
        // Enhanced animation effects
        if (direction === 'next') {
            activeSlide.style.animation = 'slideInFromRight 0.5s ease-in-out';
        } else if (direction === 'prev') {
            activeSlide.style.animation = 'slideInFromLeft 0.5s ease-in-out';
        } else {
            activeSlide.style.animation = 'slideIn 0.5s ease-in-out';
        }
        
        // Clear animation after completion
        setTimeout(() => {
            if (activeSlide) {
                activeSlide.style.animation = '';
            }
        }, 500);
    }
    
    handleKeypress(e) {
        switch(e.code) {
            case 'ArrowRight':
            case 'Space':
            case 'PageDown':
                this.nextSlide();
                break;
            case 'ArrowLeft':
            case 'PageUp':
                this.previousSlide();
                break;
            case 'Home':
                this.goToSlide(1);
                break;
            case 'End':
                this.goToSlide(this.totalSlides);
                break;
            case 'Escape':
                this.showSlideOverview();
                break;
            default:
                // Handle number keys for direct navigation
                if (e.code.startsWith('Digit')) {
                    const digit = parseInt(e.code.replace('Digit', ''));
                    if (e.ctrlKey || e.metaKey) {
                        // Ctrl/Cmd + number for direct slide access
                        if (digit >= 1 && digit <= 9) {
                            this.goToSlide(digit);
                        }
                    }
                }
                break;
        }
    }
    
    showSlideOverview() {
        console.log('Enhanced slide overview requested');
        alert(`Enhanced QPAudioEraser Presentation\nCurrent slide: ${this.currentSlide} of ${this.totalSlides}\n\nEnhanced Features:\n• First 5 slides with rich visuals and animations\n• Interactive timeline and quantum visualizations\n• Logo integration and institutional branding\n\nKeyboard shortcuts:\n• Arrow keys or Space: Navigate\n• Home/End: First/Last slide\n• Ctrl+1-9: Jump to slide\n• F11: Fullscreen\n• Ctrl+P: Auto-play`);
    }
    
    // Method to handle touch/swipe gestures for mobile
    initTouchGestures() {
        let startX = 0;
        let startY = 0;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Horizontal swipe detection
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe left - next slide
                    this.nextSlide();
                } else {
                    // Swipe right - previous slide
                    this.previousSlide();
                }
            }
            
            // Reset
            startX = 0;
            startY = 0;
        }, { passive: true });
    }
    
    // Progress indicator
    updateProgressIndicator() {
        const progress = (this.currentSlide / this.totalSlides) * 100;
        
        // Create progress bar if it doesn't exist
        let progressBar = document.querySelector('.progress-bar');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            progressBar.innerHTML = '<div class="progress-fill"></div>';
            document.body.appendChild(progressBar);
            
            // Add CSS for enhanced progress bar
            const style = document.createElement('style');
            style.textContent = `
                .progress-bar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 6px;
                    background: rgba(26, 45, 58, 0.8);
                    z-index: 1000;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }
                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #32a4b8 0%, #4a90e2 50%, #64ffda 100%);
                    transition: width 0.5s ease;
                    width: 0%;
                    box-shadow: 0 0 10px rgba(50, 164, 184, 0.5);
                }
            `;
            document.head.appendChild(style);
        }
        
        const progressFill = progressBar.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
    }
    
    // Auto-play functionality
    startAutoPlay(intervalSeconds = 30) {
        this.autoPlayInterval = setInterval(() => {
            if (this.currentSlide < this.totalSlides) {
                this.nextSlide();
            } else {
                this.stopAutoPlay();
            }
        }, intervalSeconds * 1000);
        
        console.log(`Auto-play started: ${intervalSeconds}s per slide`);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
            console.log('Auto-play stopped');
        }
    }
    
    // Fullscreen functionality
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }
}

// Enhanced slide animations
const enhancedAnimationStyles = `
    @keyframes slideInFromRight {
        from {
            opacity: 0;
            transform: translate(-30%, -50%) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes slideInFromLeft {
        from {
            opacity: 0;
            transform: translate(-70%, -50%) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes titleGlow {
        0%, 100% { 
            text-shadow: 0 0 20px rgba(50, 164, 184, 0.3); 
        }
        50% { 
            text-shadow: 0 0 30px rgba(50, 164, 184, 0.6), 0 0 40px rgba(74, 144, 226, 0.4); 
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInFromBottom {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes quantumFloat {
        from {
            opacity: 0;
            transform: translateY(20px) rotate(-5deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
        }
    }
    
    @keyframes quantumGlow {
        0%, 100% { 
            box-shadow: 0 10px 20px rgba(50, 164, 184, 0.2); 
        }
        50% { 
            box-shadow: 0 20px 40px rgba(50, 164, 184, 0.6), 0 0 30px rgba(74, 144, 226, 0.4); 
            transform: translateY(-10px) scale(1.05);
        }
    }
    
    @keyframes pulseIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.1);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes slideInFromSide {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes countUp {
        from {
            opacity: 0;
            transform: scale(0.5);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .slide.active {
        animation: slideIn 0.5s ease-in-out !important;
    }
    
    /* Enhanced hover effects */
    .timeline-item, .arch-step, .quantum-concept, .advantage-item {
        transition: all 0.3s ease;
    }
    
    .timeline-item:hover, .arch-step:hover, .quantum-concept:hover, .advantage-item:hover {
        transform: translateY(-5px);
    }
`;

// Global presentation controller variable
let presentationController = null;

// Initialize the enhanced presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing enhanced presentation...');
    
    // Add enhanced animations
    const styleSheet = document.createElement('style');
    styleSheet.textContent = enhancedAnimationStyles;
    document.head.appendChild(styleSheet);
    
    // Wait a bit for DOM to fully settle, then try multiple initialization approaches
    setTimeout(() => {
        // Initialize presentation controller
        presentationController = new PresentationController();
        
        // Double-check button bindings after a short delay
        setTimeout(() => {
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            
            if (prevBtn && nextBtn && presentationController) {
                console.log('Re-binding navigation buttons as fallback');
                
                // Clear any existing listeners and rebind
                const newPrevBtn = prevBtn.cloneNode(true);
                const newNextBtn = nextBtn.cloneNode(true);
                prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
                nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
                
                // Add fresh event listeners
                newPrevBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Previous button clicked via fallback');
                    if (presentationController) {
                        presentationController.previousSlide();
                    }
                });
                
                newNextBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Next button clicked via fallback');
                    if (presentationController) {
                        presentationController.nextSlide();
                    }
                });
                
                // Update references
                presentationController.prevBtn = newPrevBtn;
                presentationController.nextBtn = newNextBtn;
            }
        }, 500);
        
        // Initialize touch gestures for mobile
        presentationController.initTouchGestures();
        
        // Additional event handlers
        document.addEventListener('keydown', (e) => {
            if (e.code === 'F11') {
                e.preventDefault();
                presentationController.toggleFullscreen();
            }
            
            // Auto-play controls
            if (e.code === 'KeyP' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                if (presentationController.autoPlayInterval) {
                    presentationController.stopAutoPlay();
                } else {
                    presentationController.startAutoPlay(30); // 30 seconds per slide
                }
            }
        });
        
        // Window resize handler for responsive design
        window.addEventListener('resize', () => {
            const activeSlide = document.querySelector('.slide.active');
            if (activeSlide) {
                activeSlide.scrollTop = 0;
            }
        });
        
        // Handle visibility change (tab switching)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (presentationController.autoPlayInterval) {
                    presentationController.wasAutoPlaying = true;
                    presentationController.stopAutoPlay();
                }
            } else {
                if (presentationController.wasAutoPlaying) {
                    presentationController.startAutoPlay(30);
                    presentationController.wasAutoPlaying = false;
                }
            }
        });
        
        // Make presentation globally accessible for debugging
        window.presentation = presentationController;
        
        console.log(`
        🎓 Enhanced QPAudioEraser: Quantum-Inspired Audio Unlearning Presentation
        📍 IJCB 2025, Osaka, Japan
        🔬 IIT Jodhpur Research
        
        ✨ ENHANCED FEATURES:
        • Rich visual design with institutional logos
        • Interactive timeline and quantum visualizations
        • Enhanced slides 1-5 with sophisticated layouts
        • Smooth animations and transitions
        • Professional conference branding
        
        Navigation Controls:
        • Arrow keys or Space: Next/Previous slide
        • Click Next/Previous buttons: Navigate slides
        • Home/End: First/Last slide
        • F11: Toggle fullscreen
        • Ctrl+P: Toggle auto-play
        • Escape: Show help
        
        Total slides: 20 (First 5 enhanced)
        Current slide: 1
        `);
        
    }, 50); // Small delay to ensure DOM is fully ready
});

// Fallback initialization if DOMContentLoaded doesn't fire
if (document.readyState === 'loading') {
    // Still loading, wait for DOMContentLoaded
} else {
    // Already loaded, initialize immediately
    console.log('Document already loaded - initializing enhanced presentation...');
    setTimeout(() => {
        if (!presentationController) {
            presentationController = new PresentationController();
            presentationController.initTouchGestures();
            window.presentation = presentationController;
        }
    }, 100);
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PresentationController;
}