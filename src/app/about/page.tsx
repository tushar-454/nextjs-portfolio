import { Education, educations } from '@/Data/educations';
import { Experience, experiences } from '@/Data/experiences';
import { AboutLayout } from '@/components/about/AboutLayout';
import { EducationCard } from '@/components/about/EducationCard';
import { ExperienceCard } from '@/components/about/ExperienceCard';
import { Container } from '@/components/shared/Container';

const page = () => {
  return (
    <main className='bg-neutral-100 dark:bg-[#191919]'>
      <Container>
        <div className='space-y-16 py-20'>
          <AboutLayout title='About'>
            <p
              data-aos='fade-down'
              data-aos-duration='300'
              className='text-neutral-900 dark:text-neutral-400'
            >
              Hello there! 👋 I'm Tushar Imran, a passionate front-end developer
              with a focus on crafting seamless user experiences. My expertise
              lies in leveraging the power of JavaScript and React to build
              intuitive and innovative software solutions that address real user
              needs. With 1.5 years of hands-on experience in web development, I
              thrive on translating ideas into functional, elegant, and
              responsive applications. I'm committed to staying updated with the
              latest trends and best practices in front-end technologies,
              allowing me to consistently deliver high-quality, efficient code.
              My journey began with a fascination for creating interactive and
              visually appealing interfaces. Over time, I've honed my skills in
              JavaScript, harnessing its capabilities to bring life to web
              applications. React, with itscomponent-based architecture, has
              become my go-to framework for building scalable and maintainable
              projects, enabling me to craft dynamic UIs that resonate with
              users. Collaboration and problem-solving are at the core of my
              approach. I love working in teams, brainstorming solutions, and
              contributing my expertise to overcome challenges. Whether it's
              optimizing performance, ensuring cross-browser compatibility, or
              enhancing accessibility, I strive for excellence in every aspect
              of development. When I'm not coding, you'll likely find me
              exploring new technologies or seeking inspiration from design and
              usability principles. I believe in continuous learning and am
              always eager to explore new avenues to refine my skills and expand
              my knowledge. Let's connect and discuss how we can create
              exceptional digital experiences together!
            </p>
          </AboutLayout>
          <AboutLayout title='Work Experience'>
            {experiences.length > 0 ? (
              <>
                {experiences?.map((experience: Experience, index: number) => (
                  <ExperienceCard key={index} experience={experience} />
                ))}
              </>
            ) : (
              <h1
                data-aos='fade-down'
                data-aos-duration='300'
                className='text-lg font-bold italic text-neutral-900 dark:text-neutral-400'
              >
                No experience. I'm Fresher
              </h1>
            )}
          </AboutLayout>
          <AboutLayout title='Education'>
            <>
              {educations?.map((education: Education, index: number) => (
                <EducationCard key={index} education={education} />
              ))}
            </>
          </AboutLayout>
        </div>
      </Container>
    </main>
  );
};

export default page;
