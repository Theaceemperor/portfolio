'use client'
import { ContactUs, SectionHeader, SignUp } from "@/app/components/client/ReusableComponents";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const projectsData = [
    { id: 1, title: 'Catalyst Canvas', description: "Catalyst Canvas is a dynamic and engaging website module designed to showcase the impactful work of a charitable organization or non-profit entity. Seamlessly blending modern design with user-friendly functionality, Catalyst Canvas aims to provide visitors with a rich and interactive experience.", imageUrl: '/portfolio/catalyst_canvas.PNG', link: 'https://catalystcanvas.vercel.app', detailedDesc: 
    <div>
        <b>Key Features:</b>
        <ul>
            <b>1. Homepage Elegance:</b>
            <li>- Welcome visitors with a captivating header featuring a background image or video.</li>
            <li>- Accessible navigation bar with a dropdown menu for easy exploration.</li>
        </ul>
        <ul>
            <b>2. Insightful Sections:</b>
            <li>- Impact Section: Highlight the organization's impact on the community.</li>
            <li>- Success Stories: Share inspiring stories that showcase the positive outcomes of your initiatives.</li>
            <li>- Call to Action: Encourage user engagement with a clear call to action.</li>
        </ul>
        <ul>
            <b>3. About Page:</b>
            <li>- Mission & Vision: Communicate the organization's core values and long-term goals.</li>
            <li>- Team Section: Introduce the dedicated individuals driving the organization's mission.</li>
            <li>- FAQs: Address common queries and provide valuable information to visitors.</li>
        </ul>
        <ul>
            <b>4. Project Showcase:</b>
            <li>- Projects Page: Display a curated list of projects with concise descriptions.</li>
            <li>- Impact and Success Stories: Emphasize the tangible results achieved through your initiatives.</li>
        </ul>
        <ul>
            <b>5. Media Gallery:</b>
            <li>- Explore a visually appealing gallery of media items, with easy-to-use filtering and sorting options.</li>
        </ul>
        <ul>
            <b>6. Informative Blog:</b>
            <li>- Blog Page: Share insights, updates, and relevant content with a dedicated space for blog posts.</li>
        </ul>
        <ul>
            <b>7. Support and Engage:</b>
            <li>- Donate/Support Page: Provide information on various donation options and ways to support the organization.</li>
        </ul>
        <ul>
            <b>8. Upcoming Events:</b>
            <li>- Events Page: Stay connected with the audience by showcasing upcoming events and integrating a calendar feature.</li>
        </ul>
        <ul>
            <b>9. Legal Clarity:</b>
            <li>- Privacy & Terms Page: Offer transparency on privacy policies and terms of use.</li>
        </ul>
        <ul>
            <b>10. User Interaction:</b>
            <li>- Live Chat Feature: Enhance user experience with a convenient live chat option for direct interaction.</li>
        </ul>
        <ul>
            <b>Technology Stack:</b>
            <li>- <b>Frontend:</b> React.js for a dynamic and responsive user interface.</li>
            <li>- Styling: Tailwind CSS for a clean and modern design.</li>
            <li>- Backend: nodejs</li>
        </ul>
        Catalyst Canvas aims to create a digital space that not only informs but also inspires visitors to actively participate in the organization's mission. Through thoughtful design and user-centric features, Catalyst Canvas stands as a testament to the organization's commitment to positive change and community impact.
    </div>, price: 1320 },

    { id: 2, title: 'HarmonyHub Consult', description: "Developed by the innovation software company, Spadeshub, HarmonyHub Consult is a dynamic platform crafted for seamless interactions between clients and experts. The objective is to simplify the consultation process, offering a mordern and efficient solution.", imageUrl: '/portfolio/consult.PNG', link: 'https://spadesconsult.vercel.app',  price: 'contact us' },

    { id: 3, title: 'FlexiScape', description: 'A very cool and informative landing page tailored for any purpose, from; individuals, to small business as well as coporates willing to showcase specific products or services.', imageUrl: '/portfolio/landing.PNG', link: 'https://spadeslanding.vercel.app', detailedDesc: 
    <div>
        Elevate your client's/customer's service/product curiousity and experience with our customizable, scalable, fast, informative and user-friendly React-based landing page module.
        <br />
        <b>Key Features:</b>
        <p>The FlexiScape landing page module is developed using React has several unique features that distinguish it from competitors. Here are some of those features:
        </p>
        {/* <ul>
            <li><b>1. Integrated Socials:</b> Foster community engagement with seamless integration of social media profiles.</li>
            <li><b>2. Membership Management:</b> Streamline and enhance user experience with a robust membership management system.
            </li>
            <li><b>3. Point System:</b> Implement a rewarding point system to incentivize user engagement and loyalty.</li>
            <li><b>4. Mini Ecommerce Store Page:</b> Provide users with the opportunity to explore and purchase fitness and spa-related products through a user-friendly store page.</li>
            <li><b>5. Blog:</b> Share insights, tips, and updates with an integrated blog, establishing ZenFit Spa as a valuable resource.</li>
            <li><b>6. Exclusive Stack of Services:</b> Showcase a curated selection of fitness and rejuvenation services for an exclusive user experience.</li>
            <li><b>7. Seamless User Experience and Navigation:</b> Prioritize user satisfaction with an intuitive interface and easy navigation.</li>
            <li><b>8. Admin Management:</b> Facilitate efficient administration of the platform for seamless operation.</li>
        </ul> */}
        <b>Open for Custom Features:</b> Tailor the platform to specific needs with an open approach to custom features.
        <br/>
        <ul>
            <b>Technology Used:</b>
            Leveraging the advanced technologies of Spadeshub, ZenFit Spa utilizes React, Next.js, Node.js, and Tailwind CSS to ensure a seamless and engaging web experience. The consistent use of JavaScript across the stack guarantees a dynamic and responsive interface.
        </ul>
        <ul>
            <b>Our Role:</b>
            As with previous projects, Spadeshub leads the full-stack development of ZenFit Spa, from initial prototyping to deployment. The comprehensive approach ensures a cohesive platform that aligns with the vision of spa and fitness brands.
        </ul>
        <ul>
            <b>Ongoing Development and Improvement:</b>
            FlexiScape is an ongoing project, actively under development and improvement. Spadeshub continues to enhance and refine the platform, ensuring it evolves with the latest trends and technologies to deliver an unparalleled online experience.
        </ul>
    </div>, price: 870  },

    { id: 4, title: 'ZenFit Spa', description: "ZenFit Spa, a visionary project by Spadeshub, is a comprehensive spa and fitness website designed to elevate spa and fitness brands, setting them on the path for active online success. The platform embodies the essence of wellness and rejuvenation while fostering a dynamic online presence.", imageUrl: '/portfolio/zenfit.PNG', link: 'https://zenfitspa.vercel.app', detailedDesc: 
    <div>
        Elevate your client's spa experience with our customizable, scalable, fast, and user-friendly React-based spa website module.

        Our React-based spa website module is designed to create an immersive and relaxing user experience. With fast loading times, responsive design, and customizable components, users can easily navigate through services, pricing, and other relevant information. The module provides real-time updates for spa services, promotions, and events that keep users informed and engaged. It also offers dynamic search functionality to help users find the treatments they are looking for quickly and efficiently. Our spa website module is highly personalized with features like customer reviews, ratings, gift cards, and loyalty programs that create a sense of community around the spa. The integration with third-party tools like booking and scheduling systems, social media platforms, and payment gateways makes the user experience streamlined and seamless. Our module is designed to help spa businesses stand out in a competitive market by offering a superior user experience that leaves a lasting impression on their customers.
        <br />
        <b>Key Features:</b>
        <p>The spa website module developed using React has several unique features that distinguish it from competitors. Here are some of those features:
        </p>
        <ul>
            <li><b>1. Integrated Socials:</b> Foster community engagement with seamless integration of social media profiles.</li>
            <li><b>2. Membership Management:</b> Streamline and enhance user experience with a robust membership management system.
            </li>
            <li><b>3. Point System:</b> Implement a rewarding point system to incentivize user engagement and loyalty.</li>
            <li><b>4. Mini Ecommerce Store Page:</b> Provide users with the opportunity to explore and purchase fitness and spa-related products through a user-friendly store page.</li>
            <li><b>5. Blog:</b> Share insights, tips, and updates with an integrated blog, establishing ZenFit Spa as a valuable resource.</li>
            <li><b>6. Exclusive Stack of Services:</b> Showcase a curated selection of fitness and rejuvenation services for an exclusive user experience.</li>
            <li><b>7. Seamless User Experience and Navigation:</b> Prioritize user satisfaction with an intuitive interface and easy navigation.</li>
            <li><b>8. Admin Management:</b> Facilitate efficient administration of the platform for seamless operation.</li>
        </ul>
        <b>Open for Custom Features:</b> Tailor the platform to specific needs with an open approach to custom features.
        <br/>
        <ul>
            <b>Technology Used:</b>
            Leveraging the advanced technologies of Spadeshub, ZenFit Spa utilizes React, Next.js, Node.js, and Tailwind CSS to ensure a seamless and engaging web experience. The consistent use of JavaScript across the stack guarantees a dynamic and responsive interface.
        </ul>
        <ul>
            <b>Our Role:</b>
            As with previous projects, Spadeshub leads the full-stack development of ZenFit Spa, from initial prototyping to deployment. The comprehensive approach ensures a cohesive platform that aligns with the vision of spa and fitness brands.
        </ul>
        <ul>
            <b>Ongoing Development and Improvement:</b>
            ZenFit Spa is an ongoing project, actively under development and improvement. Spadeshub continues to enhance and refine the platform, ensuring it evolves with the latest trends and technologies to deliver an unparalleled online experience.
        </ul>
        These unique features of the spa website module help businesses create an immersive and relaxing user experience, resulting in increased customer satisfaction and retention.
    </div>, price: '1480 - $2000' },

    { id: 5, title: 'DataVista Analytics', description: "The Data Analytics Website Module provides a powerful and intuitive platform for data analysts and their clients, offering a myriad of benefits that enhance collaboration, project management, and data visualization.", imageUrl: '/portfolio/analytics.PNG', link: 'https://datavistaanalytics.vercel.app', detailedDesc: 
    <div>
        <div>
            <b>Benefits: </b>
            <ul>
                <li><b>1. Streamlined Collaboration:</b> Facilitate seamless collaboration between data analysts and clients with dedicated project management tools, real-time communication features, and shared dashboards. The module's intuitive interface promotes efficient collaboration and ensures that all stakeholders are on the same page.</li>
                <li><b>2. Showcase Projects Effectively:</b> Empower data analysts to showcase their expertise and completed projects through a visually appealing and customizable portfolio. Clients can easily explore past work, enabling a transparent and engaging experience.
                </li>
                <li><b>3. Robust Data Visualization:</b> Enable data analysts to create interactive and insightful data visualizations. The module supports a wide range of charts, graphs, and filters, allowing analysts to convey complex findings in an easily understandable format. Clients benefit from a visually rich experience that enhances data comprehension.</li>
                <li><b>4. Comprehensive Project Management:</b> Enhance project management capabilities with dedicated pages for creating, editing, and managing data analysis projects. The module includes detailed project timelines, milestones, and progress indicators, ensuring that both analysts and clients have a comprehensive view of project status.</li>
                <li><b>5. Client-Centric Features:</b> Enhance project management capabilities with dedicated pages for creating, editing, and managing data analysis projects. The module includes detailed project timelines, milestones, and progress indicators, ensuring that both analysts and clients have a comprehensive view of project status.</li>
                <li><b>6. Seamless User Experience and Navigation:</b> Prioritize user satisfaction with an intuitive interface and easy navigation.</li>
                <li><b>7. Personalized Settings:</b> Empower users with personalized settings, including account preferences, security configurations, and notification settings. Analysts and clients alike can tailor their experience to suit their unique needs and preferences</li>
            </ul>
        </div>
        
        <div>
            <b>Key Features: </b>
            <ul>
                <li>
                    <b>1. Homepage:</b> 
                    <p>Overview of the company, services, and frequently asked questions (FAQ).</p>
                    <p>Call-to-action (CTA) section for user engagement.</p>
                </li>
                
                <li>
                    <b>2. Dashboard Homepage:</b> 
                    <p>Analytics tools overview</p>
                    <p>Display of recent projects and key metrics.</p>
                </li>
                
                <li>
                    <b>3. Data Visualization Page:</b> 
                    <p>Create, edit, and analyze data visualizations.</p>
                    <p>Support for various charts, graphs, and filters.</p>
                </li>
                
                <li>
                    <b>4. Projects Page:</b> 
                    <p>Project management tools for creating, viewing, and managing data analysis projects.</p>
                    <p>Detailed project timelines, milestones, and progress indicators.</p>
                </li>
                
                <li>
                    <b>5. Portfolio Page:</b> 
                    <p>Showcase completed and ongoing projects in a visually appealing portfolio.</p>
                    <p>Highlight key achievements and expertise.</p>
                </li>
                
                <li>
                    <b>6. Settings page:</b> 
                    <p>Account settings for personalized configurations.</p>
                    <p>Security settings, notification preferences, and other customizable options.</p>
                </li>
                
                <li>
                    <b>7. Project Management Page:</b> 
                    <p>Detailed project management features, including project details, data import, and collaboration tools.</p>
                </li>
                
                <li>
                    <b>8. Client Access Page:</b> 
                    <p>Secure login for clients</p>
                    <p>Access to shared dashboards and reports.</p>
                </li>
                
                <li>
                    <b>9. Client Feedback Page:</b> 
                    <p>Section for clients to provide feedback on project deliverables.</p>
                    <p>Ratings and reviews for completed projects.</p>
                </li>
                
                <li>
                    <b>10. Shared Dashboard Page:</b> 
                    <p>Display of key metrics, visualizations, and insights for a broader audience.</p>
                </li>
                
                <li>
                    <b>11. Login Page:</b> 
                    <p>unified login page for both analysts and clients.</p>
                    <p>Role selection during login and signup process.</p>
                </li>
                
                <li>
                    <b>12. Shared Dashboard Page:</b> 
                    <p>Landing page with a cookie banner for user consent.</p>
                </li>
            </ul>
        </div>
        <b>Open for Custom Features:</b> Tailor the platform to specific needs with an open approach to custom features. This module is available for both individual analysts, teams, businesses and institutions
        <br/>
        <div>
            <b>Technology Used:</b>
            Leveraging the advanced technologies of Spadeshub, ZenFit Spa utilizes React, Next.js, Node.js, and Tailwind CSS to ensure a seamless and engaging web experience. The consistent use of JavaScript across the stack guarantees a dynamic and responsive interface.
        </div>
        <div>
            <b>Our Role:</b>
            As with previous projects, Spadeshub leads the full-stack development of ZenFit Spa, from initial prototyping to deployment. The comprehensive approach ensures a cohesive platform that aligns with the vision of spa and fitness brands.
        </div>
        <div>
            <b>Ongoing Development and Improvement:</b>
            DataVista is an ongoing project, actively under development and improvement. Spadeshub continues to enhance and refine the platform, ensuring it evolves with the latest trends and technologies to deliver an unparalleled online experience.
        </div>
        <div>
            <b>Conclusion:</b>
            The Data Analytics Website Module stands as a versatile and comprehensive solution, offering benefits that cater to the unique needs of both data analysts and their clients. From streamlined collaboration to robust data visualization and personalized settings, the module transforms the data analysis experience into an engaging and efficient process for all users.
        </div>
    </div>, price: '50,000 min budget. Please contact us.' },

    { id: 6, title: 'PersonalHub', description: `PersonalHub, an individual endeavor powered by Spadeshub, is a distinctive personal website that offers a unique blend of exclusive content, confidentials, insights, and features a dedicated section for careers and certifications. The primary objective is to create a personalized and engaging space for users to subscribe to premium content, access a decisive "About" column, explore careers and certifications, and participate in a vibrant community through a chat interface.`, imageUrl: '/portfolio/personal.PNG', link: 'https://spadespersonal.vercel.app', detailedDesc: 
    <div>
        <b>Key Features:</b>
        <ul>
            <b>1. Subscription Feature:</b>
            <li>Unlock premium content by subscribing to confidentials and exclusive updates.</li>
        </ul>
        <ul>
            <b>2. Decisive About Column:</b>
            <li>Present a decisive and personalized "About" column that provides insights into the individual behind PersonalHub.</li>
        </ul>
        <ul>
            <b>3. Integration with Social Media:</b>
            <li>Foster engagement and connectivity by seamlessly integrating social media platforms with the website.</li>
        </ul>
        <ul>
            <b>4. Careers and Certifications:</b>
            <li>Explore the individual's career journey and certifications through a dedicated section, providing a comprehensive overview of professional achievements.</li>
        </ul>
        <ul>
            <b>5. Chat Interface:</b>
            <li>Engage in real-time conversations and build a vibrant community through the integrated chat interface, fostering connection and collaboration among users.</li>
        </ul>
        <ul>
            <b>Technology Used:</b>
            <li>Built on the foundation of Spadeshub's expertise, PersonalHub leverages a stack of advanced technologies, including React, Next.js, Node.js, Tailwind CSS, and Firebase for NoSQL database and secure communication. The use of JavaScript ensures a dynamic and responsive user interface.</li>
        </ul>
        <ul>
            <b>Customizable Features and Pricing:</b>
            <li>All features on PersonalHub are fully customizable, allowing clients to tailor the platform according to their unique requirements. The modular nature of the features allows for easy addition or removal based on individual preferences. The pricing of the module is determined by the specific set of features selected, providing flexibility for clients to choose the functionality that best suits their needs.</li>
        </ul>
        <ul>
            <b>Our Role:</b>
            <li>Spadeshub takes the lead in developing PersonalHub, ensuring a harmonious integration of design and functionality. From prototyping to deployment, the project showcases a cohesive and personalized online presence.</li>
        </ul>
        <ul>
            <b>Ongoing Development and Improvement:</b>
            <li>PersonalHub is an ongoing project, actively under development and improvement. Spadeshub remains dedicated to refining the user experience, expanding content offerings, and incorporating the latest trends in web development.</li>
        </ul>
    </div>  },

    { id: 7, title: 'Linted Ecommerce', description: "Welcome to MarketMingle, your go-to destination for a unique and delightful shopping experience. This small e-commerce store is designed to bring you exclusive features, easy navigation, and a curated selection of products that make every purchase special.", imageUrl: '/portfolio/linted.PNG', link: 'https://linted.vercel.app', price: ' contact us' },

    { id: 8, title: 'TastyBites', description: "Embark on a culinary journey with TastyBites, a tantalizing cuisine website model meticulously crafted for discerning food enthusiasts. Immerse yourself in an exclusive list of menus, where each dish is a symphony of flavors curated to elevate your dining experience. The primary objective of TastyBites is to offer a feast for the senses, blending exquisite tastes with a visually delightful presentation.", imageUrl: '/portfolio/cuisine.PNG', link: 'https://thefoodalleyways.vercel.app', detailedDesc: 
    <div>
        <b>Key Features:</b>
        <ul>
            <b>1. Exclusive Menus:</b>
            <li>Indulge in a curated collection of exclusive menus, each dish thoughtfully crafted to delight your taste buds.</li>
        </ul>
        <ul>
            <b>2. Easy Navigation:</b>
            <li>Navigate the TastyBites universe effortlessly with an intuitively designed interface, ensuring a smooth and enjoyable exploration of culinary offerings.</li>
        </ul>
        <ul>
            <b>3. Integration with Social Media:</b>
            <li>Share your gastronomic adventures with friends and followers through seamless integration with popular social media platforms. Spread the joy of TastyBites far and wide.</li>
        </ul>
        <ul>
            <b>4. Visual Delight:</b>
            <li>Immerse yourself in a visual feast as TastyBites showcases enticing images of dishes, creating an appetizing anticipation before each culinary exploration.</li>
        </ul>
        <br/>
        <ul>
            <b>Your Culinary Experience:</b>
            <li>TastyBites transcends the ordinary, providing a digital haven for those who savor the artistry of food. Whether you're a seasoned gourmet or a culinary explorer, this platform invites you to discover, savor, and share the richness of flavors that define each menu.</li>
        </ul>
        <br/>
        <ul>
            <b>Ongoing Culinary Exploration:</b>
            <li>TastyBites is a living project, continually evolving to bring you the latest in gastronomic delights. Our commitment to ongoing development ensures that your culinary journey remains fresh, exciting, and always ready to surprise your palate.</li>
        </ul>
        <br/>
        <ul>
            <b>Technology Stack:</b>
            Built on a foundation of cutting-edge technologies, TastyBites seamlessly integrates React, Next.js, Node.js, Tailwind CSS, and Firebase for a dynamic and secure user experience. The use of JavaScript ensures an interactive interface that mirrors the vibrancy of the culinary world.
        </ul>
    </div>, price: 1550 },
    //{ id: 9, title: '', description: '', imageUrl: '', link: '' },
]

export default function Page({ params }) {
    const router = useRouter();

    //Access the url search params
    const searchParams = useSearchParams();

    // extract the projectId from the url
    const search = searchParams.getAll('project')

    // Find the project with the matyching ID
    const project = projectsData.find((p) => String(p.id) === String(search));

    //check if the project is found 
    if (!project) {
        return <div>Project not found!{router.push('/projects')}</div>
    }

    const searchId = parseInt(search);

    const handlePrevious = () => {
        if (searchId > 1) {
            router.replace(`/projects/[project]?project=${searchId - 1}`);
        } else if (searchId <= 1) {
            router.replace('/projects')
        }
    }

    const handleNext = () => {
        if (projectsData.find((p) => String(p.id) <= String(search))) {
            router.push(`/projects/[project]?project=${searchId + 1}`);
        } else {
            null
        }
    }

    return (
        <main>
            <h2 className="text-3xl font-bold mb-8 text-center mt-4">{project.title}</h2>
            <nav className="flex items-center justify-between px-4 mt-8">
                <button className="bg-amber-600 text-black py-2 px-4 rounded-md hover:bg-transparent hover:text-amber-600 focus:outline-none" onClick={handlePrevious}>Previous</button>
                <button className="bg-amber-600 text-black py-2 px-4 rounded-md hover:bg-transparent hover:text-amber-600 focus:outline-none" onClick={handleNext}>Next</button>
            </nav>

            <section className="container px-2 mx-auto my-16">
                <div className="max-w-2xl mx-auto">
                    {/* Project Image (if available) */}
                    {project.imageUrl && project.imageUrl.length > 0 && (
                        <Image src={project.imageUrl} alt={`${project.title} Image`} width={500} height={500} quality={100} priority className="w-full h-auto object-cover mb-6 rounded-md" />
                    )}

                    {/* Project Title */}
                    <SectionHeader headerLink={project.link} headerText={project.title} />
                    <div>
                        <p>Value - ${project.price} License fee included</p>
                        <ContactUs />
                    </div>

                    {/* Project Description */}
                    <div className="text-lg text-gray-700 mb-8">{project.description}</div>

                    {/* Additional Project Details can be added here */}
                    <div className="text-lg text-gray-700 mb-8">{project.detailedDesc}</div>

                    <Link href={project.link} className="flex items-center justify-center px-4 py-2 rounded-full hover:bg-amber-600 hover:text-black text-amber-600 transition duration-300 font-semibold" target="_blank" rel="noopener noreferrer">View live here</Link>

                    <div className="flex items-center justify-around">
                        <ContactUs />
                        <SignUp />
                    </div>
                </div>
            </section>
        </main>
    )
}