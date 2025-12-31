// src/pages/ServiceAgreementPage.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'react-feather';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const ServiceAgreementPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Service <span className="text-orange-400">Agreement</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl">
            This Service Agreement outlines the terms and conditions for professional automation services provided by IronForge Automations.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last updated: December 31, 2025
          </p>
        </div>
      </section>

      {/* Agreement Content */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            {/* Introduction Box */}
            <div className="bg-gradient-to-r from-orange-900/20 to-slate-800 rounded-lg p-6 mb-12 border border-orange-800/50">
              <div className="flex items-start gap-4">
                <div className="bg-orange-900/30 p-3 rounded-lg">
                  <FileText className="text-orange-400" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Service Agreement Overview</h2>
                  <p className="text-slate-300">
                    This agreement ("Agreement") is entered into between IronForge Automations ("Service Provider," "we," "us," or "our") and the client ("Client," "you," or "your") for the provision of automation and technology services.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-slate-800 rounded-lg p-6 mb-12 border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li><a href="#scope" className="text-orange-400 hover:text-orange-300 transition-colors">1. Scope of Services</a></li>
                <li><a href="#engagement" className="text-orange-400 hover:text-orange-300 transition-colors">2. Engagement Process</a></li>
                <li><a href="#client-responsibilities" className="text-orange-400 hover:text-orange-300 transition-colors">3. Client Responsibilities</a></li>
                <li><a href="#deliverables" className="text-orange-400 hover:text-orange-300 transition-colors">4. Deliverables</a></li>
                <li><a href="#timeline" className="text-orange-400 hover:text-orange-300 transition-colors">5. Project Timeline</a></li>
                <li><a href="#pricing" className="text-orange-400 hover:text-orange-300 transition-colors">6. Pricing and Payment</a></li>
                <li><a href="#revisions" className="text-orange-400 hover:text-orange-300 transition-colors">7. Revisions and Changes</a></li>
                <li><a href="#support" className="text-orange-400 hover:text-orange-300 transition-colors">8. Support and Maintenance</a></li>
                <li><a href="#data-handling" className="text-orange-400 hover:text-orange-300 transition-colors">9. Data Handling</a></li>
                <li><a href="#ownership" className="text-orange-400 hover:text-orange-300 transition-colors">10. Ownership and Rights</a></li>
                <li><a href="#warranties-service" className="text-orange-400 hover:text-orange-300 transition-colors">11. Service Warranties</a></li>
                <li><a href="#communication" className="text-orange-400 hover:text-orange-300 transition-colors">12. Communication</a></li>
                <li><a href="#dispute" className="text-orange-400 hover:text-orange-300 transition-colors">13. Dispute Resolution</a></li>
                <li><a href="#general" className="text-orange-400 hover:text-orange-300 transition-colors">14. General Provisions</a></li>
              </ul>
            </div>

            {/* Section 1 */}
            <div id="scope" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. Scope of Services</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  IronForge Automations agrees to provide the following categories of services as specified in individual project statements of work:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <h4 className="text-white font-semibold mb-2">Automation Services</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• Workflow automation design</li>
                      <li>• Process automation development</li>
                      <li>• Custom script creation</li>
                      <li>• Integration development</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <h4 className="text-white font-semibold mb-2">AI & RPA Services</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• AI model integration</li>
                      <li>• Robotic Process Automation</li>
                      <li>• Machine learning solutions</li>
                      <li>• Intelligent document processing</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <h4 className="text-white font-semibold mb-2">Consulting Services</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• Process analysis</li>
                      <li>• Technology assessment</li>
                      <li>• Digital transformation strategy</li>
                      <li>• Implementation planning</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <h4 className="text-white font-semibold mb-2">Support Services</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• Training and documentation</li>
                      <li>• Ongoing maintenance</li>
                      <li>• Performance optimization</li>
                      <li>• Technical support</li>
                    </ul>
                  </div>
                </div>

                <p className="text-slate-300">
                  The specific scope for each project will be detailed in a separate Statement of Work (SOW) or project proposal that becomes part of this Agreement upon client acceptance.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="engagement" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Engagement Process</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  Our engagement process follows these steps:
                </p>
                <ol className="list-decimal list-inside text-slate-300 space-y-3 mb-4">
                  <li><strong className="text-white">Discovery Call:</strong> Initial consultation to understand your needs and challenges</li>
                  <li><strong className="text-white">Proposal:</strong> Detailed project proposal including scope, timeline, and pricing</li>
                  <li><strong className="text-white">Agreement:</strong> Execution of this Service Agreement and project-specific SOW</li>
                  <li><strong className="text-white">Kickoff:</strong> Project initiation meeting and requirements gathering</li>
                  <li><strong className="text-white">Development:</strong> Iterative development with regular progress updates</li>
                  <li><strong className="text-white">Testing:</strong> Quality assurance and user acceptance testing</li>
                  <li><strong className="text-white">Deployment:</strong> Implementation and go-live support</li>
                  <li><strong className="text-white">Handover:</strong> Documentation, training, and transition to maintenance</li>
                </ol>
              </div>
            </div>

            {/* Section 3 */}
            <div id="client-responsibilities" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. Client Responsibilities</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  To ensure successful project delivery, the Client agrees to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Designate a primary point of contact with decision-making authority</li>
                  <li>Provide timely access to necessary systems, data, and resources</li>
                  <li>Respond to requests for information or approval within agreed timeframes</li>
                  <li>Participate in scheduled meetings and reviews</li>
                  <li>Provide accurate and complete information about existing systems and processes</li>
                  <li>Ensure availability of internal resources as needed for the project</li>
                  <li>Review and approve deliverables in a timely manner</li>
                  <li>Communicate any changes in requirements promptly</li>
                </ul>
                <p className="text-slate-300">
                  Delays caused by the Client's failure to fulfill these responsibilities may result in timeline adjustments and additional fees.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div id="deliverables" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Deliverables</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  Project deliverables may include, as specified in the SOW:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Custom automation solutions and integrations</li>
                  <li>Source code and configuration files</li>
                  <li>Technical documentation</li>
                  <li>User guides and training materials</li>
                  <li>Process documentation and workflows</li>
                  <li>Test results and quality reports</li>
                </ul>
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Acceptance Criteria:</strong> Deliverables will be deemed accepted if:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Client provides written acceptance, or</li>
                  <li>Client does not provide written rejection with specific deficiencies within ten (10) business days of delivery, or</li>
                  <li>Client uses the deliverable in production</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div id="timeline" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. Project Timeline</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  Project timelines will be specified in each SOW. The following conditions apply:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Timelines are estimates based on information available at project start</li>
                  <li>Milestones and deadlines are mutually agreed upon</li>
                  <li>Timeline adjustments may be necessary due to scope changes, unforeseen technical challenges, or client delays</li>
                  <li>Both parties will communicate promptly about any factors affecting the timeline</li>
                </ul>
                <p className="text-slate-300">
                  <strong className="text-white">Force Majeure:</strong> Neither party shall be liable for delays caused by circumstances beyond their reasonable control, including but not limited to natural disasters, acts of government, or major service provider outages.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div id="pricing" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">6. Pricing and Payment</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Pricing Models:</strong> We offer flexible pricing options:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <h4 className="text-orange-400 font-semibold mb-2">Fixed Price</h4>
                    <p className="text-slate-400 text-sm">For well-defined projects with clear scope. Price is fixed based on agreed deliverables.</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <h4 className="text-orange-400 font-semibold mb-2">Time & Materials</h4>
                    <p className="text-slate-400 text-sm">For projects with evolving requirements. Billed based on actual hours worked.</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <h4 className="text-orange-400 font-semibold mb-2">Retainer</h4>
                    <p className="text-slate-400 text-sm">Monthly engagement for ongoing support and development needs.</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <h4 className="text-orange-400 font-semibold mb-2">Value-Based</h4>
                    <p className="text-slate-400 text-sm">Pricing tied to measurable business outcomes and ROI delivered.</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Payment Schedule:</strong>
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Fixed price projects: Typically 50% deposit, 50% upon completion</li>
                  <li>Time & materials: Invoiced bi-weekly or monthly</li>
                  <li>Retainer: Invoiced monthly in advance</li>
                  <li>Payment due within thirty (30) days of invoice date</li>
                </ul>

                <p className="text-slate-300">
                  <strong className="text-white">Late Payment:</strong> Overdue amounts accrue interest at 1.5% per month. We reserve the right to suspend work on accounts more than thirty (30) days past due.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div id="revisions" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">7. Revisions and Changes</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Change Request Process:</strong>
                </p>
                <ol className="list-decimal list-inside text-slate-300 space-y-2 mb-4">
                  <li>Client submits a written change request describing the desired modifications</li>
                  <li>We evaluate the impact on scope, timeline, and cost</li>
                  <li>A change order is prepared detailing the adjustments</li>
                  <li>Client approves the change order in writing</li>
                  <li>Work proceeds on the approved changes</li>
                </ol>
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Included Revisions:</strong> Unless otherwise specified, projects include reasonable revisions during the development phase that are within the original scope.
                </p>
                <p className="text-slate-300">
                  <strong className="text-white">Out-of-Scope Changes:</strong> Requests that materially change the project scope will be treated as new work and priced accordingly.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div id="support" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">8. Support and Maintenance</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Warranty Period:</strong> All deliverables include a thirty (30) day warranty period after deployment during which we will fix any defects at no additional cost.
                </p>
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Ongoing Support:</strong> After the warranty period, support and maintenance services are available through:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Monthly support retainer agreements</li>
                  <li>Per-incident support requests</li>
                  <li>Annual maintenance contracts</li>
                </ul>
                <p className="text-slate-300">
                  Support services include bug fixes, minor enhancements, monitoring, and technical assistance. Major new features or significant changes are considered new projects.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div id="data-handling" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">9. Data Handling</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  We take data security seriously and commit to the following:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li><strong className="text-white">Access:</strong> Client data will only be accessed by team members who require it for project work</li>
                  <li><strong className="text-white">Storage:</strong> Data will be stored securely using industry-standard encryption</li>
                  <li><strong className="text-white">Transmission:</strong> Data in transit will be protected using secure protocols</li>
                  <li><strong className="text-white">Retention:</strong> Client data will be deleted or returned upon project completion as requested</li>
                  <li><strong className="text-white">Compliance:</strong> We will work with clients to ensure solutions meet applicable regulatory requirements</li>
                </ul>
                <p className="text-slate-300">
                  For projects involving sensitive data, additional data processing agreements may be executed as needed.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div id="ownership" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">10. Ownership and Rights</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Client Ownership:</strong> Upon full payment, the Client owns:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Custom code, scripts, and configurations created specifically for the project</li>
                  <li>Project-specific documentation and materials</li>
                  <li>Custom designs and workflows created for the Client</li>
                </ul>
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">IronForge Retains:</strong>
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Pre-existing tools, frameworks, and methodologies</li>
                  <li>General knowledge and skills gained during the project</li>
                  <li>Reusable components and libraries (with license granted to Client for project use)</li>
                  <li>Right to reference the project in our portfolio (unless agreed otherwise)</li>
                </ul>
                <p className="text-slate-300">
                  <strong className="text-white">Third-Party Components:</strong> Where third-party tools or services are used, Client agrees to comply with applicable third-party license terms.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div id="warranties-service" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">11. Service Warranties</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  IronForge Automations warrants that:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Services will be performed with professional skill and care</li>
                  <li>Work will be performed by qualified personnel</li>
                  <li>Deliverables will materially conform to agreed specifications</li>
                  <li>We will use commercially reasonable efforts to meet project timelines</li>
                </ul>
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 mb-4">
                  <p className="text-slate-400 text-sm">
                    <strong className="text-white">Limitation:</strong> We do not warrant that solutions will be error-free or uninterrupted, or that they will meet all of Client's expectations beyond the agreed specifications. Automation solutions depend on external systems, data quality, and proper use.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 12 */}
            <div id="communication" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">12. Communication</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  Effective communication is essential for project success. We commit to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Regular progress updates (frequency to be agreed upon)</li>
                  <li>Prompt response to Client inquiries (typically within one business day)</li>
                  <li>Clear documentation of decisions and changes</li>
                  <li>Proactive communication about risks or issues</li>
                </ul>
                <p className="text-slate-300">
                  Primary communication will be conducted through agreed-upon channels (email, project management tools, video calls, etc.).
                </p>
              </div>
            </div>

            {/* Section 13 */}
            <div id="dispute" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">13. Dispute Resolution</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  In the event of a dispute, the parties agree to:
                </p>
                <ol className="list-decimal list-inside text-slate-300 space-y-2 mb-4">
                  <li><strong className="text-white">Negotiation:</strong> First attempt to resolve the dispute through good-faith negotiation</li>
                  <li><strong className="text-white">Mediation:</strong> If negotiation fails, engage a mutually agreed mediator</li>
                  <li><strong className="text-white">Arbitration:</strong> If mediation fails, submit to binding arbitration in Wyoming</li>
                </ol>
                <p className="text-slate-300">
                  The prevailing party in any dispute resolution proceeding shall be entitled to recover reasonable attorneys' fees and costs.
                </p>
              </div>
            </div>

            {/* Section 14 */}
            <div id="general" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">14. General Provisions</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Entire Agreement:</strong> This Agreement, together with any SOW and attachments, constitutes the entire agreement between the parties and supersedes all prior agreements and understandings.
                </p>
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Amendments:</strong> This Agreement may only be modified by a written document signed by both parties.
                </p>
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Severability:</strong> If any provision of this Agreement is found to be unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Waiver:</strong> Failure to enforce any right or provision shall not constitute a waiver of such right or provision.
                </p>
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Assignment:</strong> Neither party may assign this Agreement without the other party's written consent, except in connection with a merger or acquisition.
                </p>
                <p className="text-slate-300">
                  <strong className="text-white">Governing Law:</strong> This Agreement shall be governed by the laws of the State of Wyoming.
                </p>
              </div>
            </div>

            {/* Contact and Acceptance */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-lg p-6 mb-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Questions About This Agreement?</h3>
              <p className="text-slate-300 mb-4">
                If you have any questions about this Service Agreement or would like to discuss a project, please contact us:
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Contact Us
                </a>
                <Link
                  to="/terms-of-service"
                  className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  View Terms & Conditions
                </Link>
              </div>
            </div>

            {/* Related Links */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Related Documents</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/terms-of-service"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Terms & Conditions →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ServiceAgreementPage;
