import { BioSection, BioYear } from '../components/bio';

const timelineData = [
    { year: '1997', event: 'Born in Sumaré/SP, Brazil.' },
    { year: '2015', event: 'Administrative Assistant at CJ Lan House' },
    { year: '2020', event: 'Started Systems Analysis and Development at FATEC-Campinas' },
    { year: '2023', event: 'Systems Development Intern at Sottelli (until 2024)' },
    { year: '2024', event: 'Obtained AWS Cloud Foundation certification and started exploring DevOps. Began freelancing in Web Development and Process Automation.' },
    { year: '2025', event: 'Graduated from FATEC-Campinas with a degree in Systems Analysis and Development' },
]

const BiographyFormat = () => {
    return (
        <>
            {timelineData.map(({ year, event }) => (
                <BioSection key={year}>
                    <BioYear>{year}</BioYear>
                    {event}
                </BioSection>
            ))}
        </>
    );
}

const Biography = () => {
    return (
        <BiographyFormat />
    );
};

export default Biography;
