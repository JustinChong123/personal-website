import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
    return (
    <TypeAnimation
        sequence={[
            "Hi, I'm Justin Chong",
            2500,
            "Hi, I'm a product designer",
            1000,
            "Hi, I'm a software engineer",
            1000,
            "Hi, I'm a product manager",
            1000,
            "Hi, I'm a freestyle skier",
            1000,
            "Hi, I'm a dancer",
            1000,
            "Hi, I'm a food blogger",
            1000,
        ]}
        speed={60}
        wrapper="span"
        repeat={Infinity}
        style={{fontSize: '5vw', fontFamily: 'Raleway', fontWeight: '800', color: '#F5F5F5'}}
    />
  );
};

export default Typewriter