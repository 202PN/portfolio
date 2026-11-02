import { SkillGroup } from '../types';

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS', 'C#', 'Bash'] },
  { category: 'Backend & web', items: ['REST APIs', 'Microservices', 'React', 'Next.js', 'Astro', 'Tailwind CSS'] },
  {
    category: 'Cloud & data',
    items: ['AWS (Lambda, ECR, API Gateway, Step Functions, DynamoDB, IAM, DocumentDB, S3, SNS/SQS, CloudFormation)', 'Apache Kafka', 'Confluent Cloud', 'PostgreSQL', 'Supabase', 'Vercel']
  },
  { category: 'Real-time & integrations', items: ['Stream Chat', 'LiveKit (WebRTC)', 'Twilio Verify'] },
  { category: 'DevOps & observability', items: ['Git', 'Docker', 'GitLab CI/CD', 'GitHub Actions', 'CloudWatch', 'Vitest'] },
  { category: 'Analytics & SEO', items: ['Google Tag Manager', 'GA4', 'Google Ads', 'Google Search Console'] },
  { category: 'AI-assisted development', items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'ChatGPT'] }
];
