import WorkSample1 from '@/public/assets/workSamples/WorkSample1.jpg'
import WorkSample2 from '@/public/assets/workSamples/WorkSample2.jpg'
import WorkSample3 from '@/public/assets/workSamples/WorkSample3.jpg'
import WorkSample4 from '@/public/assets/workSamples/WorkSample4.png'
import WorkSample5 from '@/public/assets/workSamples/WorkSample5.jpg'
import WorkSample6 from '@/public/assets/workSamples/WorkSample6.jpg'
import WorkSample7 from '@/public/assets/workSamples/WorkSample7.jpg'
import WorkSample8 from '@/public/assets/workSamples/WorkSample8.jpg'
import WorkSample9 from '@/public/assets/workSamples/WorkSample9.jpeg'

import Image from 'next/image'

const WorkSample = () => {
    return (
        <main style={{ maxWidth: '1000px' }}>
            <Image src={WorkSample1} alt="Work Sample 1" style={{ width: '100%', height: 'auto' }} />
            <Image src={WorkSample2} alt="Work Sample 2" style={{ width: '100%', height: 'auto' }} />
            <Image src={WorkSample3} alt="Work Sample 3" style={{ width: '100%', height: 'auto' }} />
            <Image src={WorkSample4} alt="Work Sample 4" style={{ width: '100%', height: 'auto' }} />
            <Image src={WorkSample5} alt="Work Sample 5" style={{ width: '100%', height: 'auto' }} />
            <Image src={WorkSample6} alt="Work Sample 6" style={{ width: '100%', height: 'auto' }} />
            <Image src={WorkSample7} alt="Work Sample 7" style={{ width: '100%', height: 'auto' }} />
            <Image src={WorkSample8} alt="Work Sample 8" style={{ width: '100%', height: 'auto' }} />
            <Image src={WorkSample9} alt="Work Sample 9" style={{ width: '100%', height: 'auto' }} />
        </main>
    )
}

export default WorkSample