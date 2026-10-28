import { TypeAnimation } from 'react-type-animation';

// Small all-caps role line: "PRODUCT DESIGNER &" stays put, the second role types out and cycles
const Typewriter = () => {
    return (
    <p className="typewriter">
        PRODUCT DESIGNER &{' '}
        <TypeAnimation
            sequence={[
                'SOFTWARE ENGINEER',
                2000,
                'PRODUCT MANAGER',
                2000,
                'INTERIOR DESIGN ENTHUSIAST',
                2000,
                'FREESTYLE SKIER',
                2000,
                'HIKER',
                2000,
                'FOOD BLOGGER',
                2000,
            ]}
            speed={60}
            wrapper="span"
            repeat={Infinity}
            className="typewriterRole"
        />
    </p>
  );
};

export default Typewriter
