import { Experience } from '../types';

export const experience: Experience[] = [
  {
    title: 'Associate Software Engineer',
    company: 'Southwest Airlines',
    location: 'Dallas, TX',
    period: 'Jun 2022 – Apr 2025',
    summary:
      'Built and operated the cloud services behind real-time reservations and flight operations, at a scale of millions of transactions a day.',
    highlights: [
      'Designed and implemented custom event processing logic for a high-throughput complex event processing (CEP) system handling 10M+ passenger and flight-operations events daily.',
      'Developed Python applications on AWS (API Gateway, Step Functions, DynamoDB, DocumentDB, SNS/SQS) powering real-time reservation systems used by internal consumers across millions of daily transactions.',
      'Replaced manual releases with automated GitLab CI/CD pipelines for builds, testing, and deployments, executing 25 QA and production deployments with zero downtime.',
      'Built serverless Python functions for data transformation, event generation, and rule processing, packaged as container images in Amazon ECR and integrated with Kafka (Confluent Cloud).',
      'Diagnosed and resolved deployment and runtime failures across GitLab CI/CD, CloudFormation stacks, and Python service code, tracing root causes through CloudWatch logs and metrics.',
      'Authored the application DOU and runbooks covering architecture, workflows, and troubleshooting, reducing engineer onboarding time by 50%.',
      'Automated daily monitoring reports on system health, application performance, and data processing metrics for proactive issue detection.'
    ],
    tech: ['Python', 'AWS Lambda', 'API Gateway', 'Step Functions', 'DynamoDB', 'DocumentDB', 'SNS/SQS', 'Kafka', 'GitLab CI/CD', 'CloudFormation']
  },
  {
    title: 'Cloud Application Developer',
    company: 'Microsoft Software & Systems Academy',
    location: 'Columbus, GA',
    period: '2022',
    summary: 'A 17-week, project-based program run as a simulated Agile team.',
    highlights: [
      'Built full-stack C#/.NET applications on Azure with SQL Server and API-based backends.',
      'Practiced debugging, algorithm design, CI/CD, and cloud deployment on real-world scenarios.'
    ],
    tech: ['C#', '.NET', 'Azure', 'SQL Server']
  },
  {
    title: 'Radiology Technologist, Sergeant',
    company: 'United States Army',
    location: 'Various locations',
    period: '2016 – 2022',
    summary:
      'Managed digital imaging and data systems with strict accuracy, compliance, and secure handling of sensitive medical information.',
    highlights: [
      'Regional Health Command Atlantic Soldier of the Year (2021).',
      'Martin Army Community Hospital Soldier of the Year and Best Leader (2020).'
    ],
    tech: ['Leadership', 'Compliance', 'Medical imaging systems']
  }
];
