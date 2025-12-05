import WorkSample1 from '@/public/assets/workSamples/WorkSample1.jpg'
import WorkSample2 from '@/public/assets/workSamples/WorkSample2.jpg'
import WorkSample3 from '@/public/assets/workSamples/WorkSample3.jpg'
import WorkSample4 from '@/public/assets/workSamples/WorkSample4.png'
import WorkSample5 from '@/public/assets/workSamples/WorkSample5.jpg'
import WorkSample6 from '@/public/assets/workSamples/WorkSample6.jpg'
import WorkSample7 from '@/public/assets/workSamples/WorkSample7.jpg'
import WorkSample8 from '@/public/assets/workSamples/WorkSample8.jpg'
import WorkSample9 from '@/public/assets/workSamples/WorkSample9.jpeg'


const WorkSample = () => {
    return (
        <main style={{ maxWidth: '1000px' }}>
            <img src={typeof WorkSample1 === 'string' ? WorkSample1 : WorkSample1.src} alt="Work Sample 1" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <img src={typeof WorkSample2 === 'string' ? WorkSample2 : WorkSample2.src} alt="Work Sample 2" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <img src={typeof WorkSample3 === 'string' ? WorkSample3 : WorkSample3.src} alt="Work Sample 3" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <img src={typeof WorkSample4 === 'string' ? WorkSample4 : WorkSample4.src} alt="Work Sample 4" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <img src={typeof WorkSample5 === 'string' ? WorkSample5 : WorkSample5.src} alt="Work Sample 5" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <img src={typeof WorkSample6 === 'string' ? WorkSample6 : WorkSample6.src} alt="Work Sample 6" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <img src={typeof WorkSample7 === 'string' ? WorkSample7 : WorkSample7.src} alt="Work Sample 7" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <img src={typeof WorkSample8 === 'string' ? WorkSample8 : WorkSample8.src} alt="Work Sample 8" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <img src={typeof WorkSample9 === 'string' ? WorkSample9 : WorkSample9.src} alt="Work Sample 9" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </main>
    )
}

export default WorkSample