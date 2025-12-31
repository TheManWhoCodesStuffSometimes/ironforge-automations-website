// src/pages/TermsOfServicePage.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const TermsOfServicePage: React.FC = () => {
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
            Terms & <span className="text-orange-400">Conditions</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl">
            Please read these terms and conditions carefully before using our services.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last updated: December 31, 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            {/* Table of Contents */}
            <div className="bg-slate-800 rounded-lg p-6 mb-12 border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                <li><a href="#acceptance" className="text-orange-400 hover:text-orange-300 transition-colors">1. Acceptance of Terms</a></li>
                <li><a href="#services" className="text-orange-400 hover:text-orange-300 transition-colors">2. Description of Services</a></li>
                <li><a href="#use" className="text-orange-400 hover:text-orange-300 transition-colors">3. Use of Services</a></li>
                <li><a href="#intellectual-property" className="text-orange-400 hover:text-orange-300 transition-colors">4. Intellectual Property</a></li>
                <li><a href="#confidentiality" className="text-orange-400 hover:text-orange-300 transition-colors">5. Confidentiality</a></li>
                <li><a href="#payment" className="text-orange-400 hover:text-orange-300 transition-colors">6. Payment Terms</a></li>
                <li><a href="#warranties" className="text-orange-400 hover:text-orange-300 transition-colors">7. Warranties and Disclaimers</a></li>
                <li><a href="#liability" className="text-orange-400 hover:text-orange-300 transition-colors">8. Limitation of Liability</a></li>
                <li><a href="#indemnification" className="text-orange-400 hover:text-orange-300 transition-colors">9. Indemnification</a></li>
                <li><a href="#termination" className="text-orange-400 hover:text-orange-300 transition-colors">10. Termination</a></li>
                <li><a href="#governing-law" className="text-orange-400 hover:text-orange-300 transition-colors">11. Governing Law</a></li>
                <li><a href="#changes" className="text-orange-400 hover:text-orange-300 transition-colors">12. Changes to Terms</a></li>
                <li><a href="#contact" className="text-orange-400 hover:text-orange-300 transition-colors">13. Contact Information</a></li>
              </ul>
            </div>

            {/* Section 1 */}
            <div id="acceptance" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  By accessing or using the services provided by IronForge Automations ("Company," "we," "us," or "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all the terms and conditions of this agreement, you may not access or use our services.
                </p>
                <p className="text-slate-300">
                  These Terms apply to all visitors, users, clients, and others who access or use our services, including but not limited to automation solutions, RPA (Robotic Process Automation), AI integrations, and consulting services.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="services" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  IronForge Automations provides custom automation solutions, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Custom automation and workflow development</li>
                  <li>Robotic Process Automation (RPA) implementation</li>
                  <li>AI and machine learning integrations</li>
                  <li>Digital transformation consulting</li>
                  <li>System integration services</li>
                  <li>Ongoing maintenance and support</li>
                </ul>
                <p className="text-slate-300">
                  The specific scope of services will be defined in individual project agreements or service contracts between the Company and the client.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="use" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. Use of Services</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Use our services in any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of our services or any server, computer, or database connected to our services</li>
                  <li>Use the services to transmit any advertising or promotional material without our prior written consent</li>
                  <li>Reverse engineer, decompile, or disassemble any software or technology provided as part of our services</li>
                  <li>Use the services to harm minors in any way</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div id="intellectual-property" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Company Property:</strong> All intellectual property rights in the methodologies, frameworks, tools, templates, and pre-existing materials used by IronForge Automations remain the exclusive property of the Company.
                </p>
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Client Property:</strong> Unless otherwise specified in a written agreement, upon full payment for services, the client shall own all custom code, configurations, and deliverables specifically created for their project.
                </p>
                <p className="text-slate-300">
                  <strong className="text-white">License:</strong> Where the Company retains ownership of certain components, the client is granted a non-exclusive, perpetual license to use such components as part of the delivered solution.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="confidentiality" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. Confidentiality</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of the engagement. This includes, but is not limited to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Business processes and workflows</li>
                  <li>Technical specifications and architectures</li>
                  <li>Financial information</li>
                  <li>Customer data and lists</li>
                  <li>Trade secrets and proprietary methodologies</li>
                </ul>
                <p className="text-slate-300">
                  This confidentiality obligation shall survive the termination of any agreement between the parties for a period of three (3) years.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div id="payment" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  Payment terms will be specified in individual project agreements. Unless otherwise stated:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>A deposit may be required before work commences</li>
                  <li>Invoices are due within thirty (30) days of receipt</li>
                  <li>Late payments may incur interest at a rate of 1.5% per month</li>
                  <li>The Company reserves the right to suspend services for non-payment</li>
                </ul>
                <p className="text-slate-300">
                  All fees are exclusive of applicable taxes, which are the responsibility of the client.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div id="warranties" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">7. Warranties and Disclaimers</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  IronForge Automations warrants that:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>Services will be performed in a professional and workmanlike manner</li>
                  <li>Deliverables will substantially conform to agreed-upon specifications</li>
                  <li>We have the right to provide the services and deliverables</li>
                </ul>
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">DISCLAIMER:</strong> EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. THE COMPANY DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div id="liability" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL IRONFORGE AUTOMATIONS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
                <p className="text-slate-300">
                  The Company's total liability for any claims arising out of or related to these Terms or the services shall not exceed the total amount paid by the client to the Company in the twelve (12) months preceding the claim.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div id="indemnification" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300">
                  You agree to defend, indemnify, and hold harmless IronForge Automations and its officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our services.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div id="termination" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  Either party may terminate an engagement:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                  <li>With thirty (30) days written notice for convenience</li>
                  <li>Immediately upon material breach by the other party that remains uncured after fifteen (15) days notice</li>
                  <li>Immediately if the other party becomes insolvent or files for bankruptcy</li>
                </ul>
                <p className="text-slate-300">
                  Upon termination, the client shall pay for all services rendered and expenses incurred up to the date of termination.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div id="governing-law" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Wyoming, and the parties hereby consent to personal jurisdiction and venue therein.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div id="changes" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300">
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least thirty (30) days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </div>

            {/* Section 13 */}
            <div id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <p className="text-white font-semibold mb-2">IronForge Automations</p>
                  <p className="text-slate-300">Laramie, Wyoming</p>
                  <p className="text-slate-300">United States</p>
                  <p className="text-orange-400 mt-2">
                    <a href="/#contact" className="hover:text-orange-300 transition-colors">Contact Us</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Related Documents</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/service-agreement"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Service Agreement →
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

export default TermsOfServicePage;
