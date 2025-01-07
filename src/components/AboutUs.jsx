import React from 'react';

const AboutUs = () => {
    return (
        <section>
            <h1 className='my-6 text-center text-3xl md:text-4xl font-bold text-blue-700'>About Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {/* div1 */}
                <div class="border rounded-xl shadow-xl bg-[#D1E7FD] px-10 py-8">
                    <h3 className='text-xl font-bold'>Our Mission & Vision</h3>
                    <p>
                        <strong>Mission:</strong> At Visa Navigator Portal, we strive to simplify the visa process, making it easier and faster for users to get the necessary information and apply for visas seamlessly.
                    </p>
                    <p>
                        <strong>Vision:</strong> We envision a world where visa applications are stress-free and accessible to everyone, regardless of their location or background.
                    </p>
                </div>
                {/* div2 */}
                <div class="border rounded-xl shadow-xl bg-[#D1E7FD] px-10 py-8">
                    <h3 className='text-xl font-bold'>Our Features</h3>
                    <ul className='list-inside list-disc'>
                        <li>Visa requirement search by country</li>
                        <li>Online visa application</li>
                        <li>Real-time tracking of application status</li>
                        <li>User-friendly interface</li>
                        <li>Multi-language support</li>
                    </ul>
                </div>

                {/* div3 */}
                <div class="border rounded-xl shadow-xl bg-[#D1E7FD] px-10 py-8">
                    <h3 className='text-xl font-bold'>Our Team & What Our Users Say</h3>
                    <p>
                        <strong>Our Team:</strong> We are a passionate team of developers, designers, and legal experts working together to make the visa process easier for everyone. Our team is dedicated to delivering the best experience for our users.
                    </p>
                   
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
