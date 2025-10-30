import { type Metadata } from 'next';
import Footer from "~/layout/footer";
import ProjectMain from "~/components/project/Shri/main";

export const metadata: Metadata = {
  title: 'SHRI Project - Reda Haloubi Portfolio',
  description: 'SHRI is a microservices-based marketplace platform. It includes a Next.js frontend, a dedicated user-auth service using BetterAuth, three Go microservices (product-catalog, store-management, order-management), an API Gateway (CORS + rate-limit + JWT validation), and Neon PostgreSQL databases. The system is deployed on Kubernetes and uses GitHub Actions for CI/CD (Docker Hub + SonarCloud).',
  openGraph: {
    title: 'SHRI Microservice Project',
    description: 'Project showcase from Reda Haloubi\'s portfolio.',
    images: [{ url: '/img/SHRI/1.png' }],
  },
};

export default function ProjectPage() {

    return (
      <div className="relative overflow-hidden">
        <main className="relative z-10 flex flex-col bg-[#0B0B0B] text-white">
            <ProjectMain/>
        </main>
        <div className="relative z-0">
              <Footer/>
            </div>
      </div>
    );
  }