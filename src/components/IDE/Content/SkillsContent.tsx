import React from 'react';
import { Settings, Code, Folder } from 'lucide-react';
import { skills } from '../../../data/skills';

const SkillsContent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Skills Overview Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Settings size={16} />
          <span>My Skills & Technologies</span>
        </div>
        <div className="code-card-body">
          <div className="code-block mb-4">
            <div className="code-line">
              <span className="line-number">1</span>
              <div className="code-content">
                <span className="comment"># These are the tools I use</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">2</span>
              <div className="code-content">
                <span className="keyword">my_skills</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            Here's my technical toolbox - the technologies I use to build digital solutions:
          </p>
        </div>
      </div>

      {/* Programming Languages Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Code size={16} />
          <span>Programming Languages</span>
        </div>
        <div className="code-card-body">
          <div className="code-block mb-4">
            <div className="code-line">
              <span className="line-number">3</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment"># Languages I code in</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">4</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"languages"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"Python", "Go", "Kotlin", "TypeScript", "SQL", "JavaScript", "C#", "Bash", "HTML/CSS"</span><span className="bracket">]</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">Go</span>
            <span className="tech-badge">Kotlin</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">SQL</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">C#</span>
            <span className="tech-badge">Bash</span>
            <span className="tech-badge">HTML/CSS</span>
          </div>
        </div>
      </div>

      {/* Cloud Platforms Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Settings size={16} />
          <span>Cloud Platforms & Services</span>
        </div>
        <div className="code-card-body">
          <div className="code-block mb-4">
            <div className="code-line">
              <span className="line-number">5</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment"># Cloud platforms and services I work with</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">6</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"cloud"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"AWS Lambda", "DynamoDB", "S3", "EC2", "API Gateway", "Step Functions", "SNS", "SQS", "CloudFormation", "CloudWatch", "IAM", "Azure", "GCP"</span><span className="bracket">]</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="tech-badge">AWS Lambda</span>
            <span className="tech-badge">DynamoDB</span>
            <span className="tech-badge">S3</span>
            <span className="tech-badge">EC2</span>
            <span className="tech-badge">API Gateway</span>
            <span className="tech-badge">Step Functions</span>
            <span className="tech-badge">SNS</span>
            <span className="tech-badge">SQS</span>
            <span className="tech-badge">CloudFormation</span>
            <span className="tech-badge">CloudWatch</span>
            <span className="tech-badge">IAM</span>
            <span className="tech-badge">Azure</span>
            <span className="tech-badge">GCP</span>
          </div>
        </div>
      </div>

      {/* Frameworks & Databases */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="code-card">
          <div className="code-card-header">
            <Code size={16} />
            <span>Frameworks & Architectures</span>
          </div>
          <div className="code-card-body">
            <div className="code-block mb-4">
              <div className="code-line">
                <span className="line-number">7</span>
                <div className="code-content">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"frameworks"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"Flask", "FastAPI", "ASP.NET", "REST APIs", "Microservices"</span><span className="bracket">]</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-badge">Flask</span>
              <span className="tech-badge">FastAPI</span>
              <span className="tech-badge">ASP.NET</span>
              <span className="tech-badge">REST APIs</span>
              <span className="tech-badge">Microservices</span>
            </div>
          </div>
        </div>

        <div className="code-card">
          <div className="code-card-header">
            <Folder size={16} />
            <span>Databases</span>
          </div>
          <div className="code-card-body">
            <div className="code-block mb-4">
              <div className="code-line">
                <span className="line-number">8</span>
                <div className="code-content">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"databases"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"PostgreSQL", "MySQL", "DynamoDB", "DocumentDB", "Redis"</span><span className="bracket">]</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-badge">PostgreSQL</span>
              <span className="tech-badge">MySQL</span>
              <span className="tech-badge">DynamoDB</span>
              <span className="tech-badge">DocumentDB</span>
              <span className="tech-badge">Redis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Data & Streaming */}
      <div className="code-card">
        <div className="code-card-header">
          <Settings size={16} />
          <span>Data & Streaming</span>
        </div>
        <div className="code-card-body">
          <div className="code-block mb-4">
            <div className="code-line">
              <span className="line-number">9</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"data_streaming"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"Apache Kafka", "Confluent Cloud", "ETL Pipelines", "Real-Time Processing", "Event-Driven Architecture"</span><span className="bracket">]</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="tech-badge">Apache Kafka</span>
            <span className="tech-badge">Confluent Cloud</span>
            <span className="tech-badge">ETL Pipelines</span>
            <span className="tech-badge">Real-Time Processing</span>
            <span className="tech-badge">Event-Driven Architecture</span>
          </div>
        </div>
      </div>

      {/* DevOps & Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="code-card">
          <div className="code-card-header">
            <Settings size={16} />
            <span>DevOps & Infrastructure</span>
          </div>
          <div className="code-card-body">
            <div className="code-block mb-4">
              <div className="code-line">
                <span className="line-number">10</span>
                <div className="code-content">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"devops"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"Docker", "Kubernetes", "GitLab CI/CD", "Jenkins", "Terraform", "Infrastructure as Code"</span><span className="bracket">]</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-badge">Docker</span>
              <span className="tech-badge">Kubernetes</span>
              <span className="tech-badge">GitLab CI/CD</span>
              <span className="tech-badge">Jenkins</span>
              <span className="tech-badge">Terraform</span>
              <span className="tech-badge">Infrastructure as Code</span>
            </div>
          </div>
        </div>

        <div className="code-card">
          <div className="code-card-header">
            <Folder size={16} />
            <span>Monitoring & Observability</span>
          </div>
          <div className="code-card-body">
            <div className="code-block mb-4">
              <div className="code-line">
                <span className="line-number">11</span>
                <div className="code-content">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"monitoring"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"CloudWatch", "Prometheus", "Grafana", "Application Performance Monitoring"</span><span className="bracket">]</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-badge">CloudWatch</span>
              <span className="tech-badge">Prometheus</span>
              <span className="tech-badge">Grafana</span>
              <span className="tech-badge">Application Performance Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
