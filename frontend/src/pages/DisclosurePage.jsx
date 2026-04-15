import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, Info, FileStack, Users, Layout } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

const sections = [
  {
    id: "general",
    title: "A. General Information",
    icon: Info,
    data: [
      { label: "Name of The School", value: "Dawn Washco School / Prince Public School" },
      { label: "Affiliation No", value: "To be updated" },
      { label: "School Code", value: "To be updated" },
      { label: "Complete Address with PIN", value: "Simari, Bisfi, Madhubani, Bihar - 847222" },
      { label: "Principal Name & Qualification", value: "To be updated" },
      { label: "School EMail ID", value: "princepublicschool1998@gmail.com" },
      { label: "Contact Detail (Landline / Mobile)", value: "+91 8873541202" },
    ]
  },
  {
    id: "documents",
    title: "B. Document And Information",
    icon: FileStack,
    documents: [
      { id: 1, name: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY", link: "#" },
      { id: 2, name: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE", link: "#" },
      { id: 3, name: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT/UT", link: "#" },
      { id: 4, name: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT. 2009, AND IT'S RENEWAL IF APPLICABLE", link: "#" },
      { id: 5, name: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE", link: "#" },
      { id: 6, name: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY", link: "#" },
      { id: 7, name: "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILATION/UPGRADATION OR SELF CERTIFICATE", link: "#" },
      { id: 8, name: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATE", link: "#" },
    ]
  },
  {
    id: "results",
    title: "C. Result And Academics",
    icon: CheckCircle,
    documents: [
      { id: 1, name: "FEE STRUCTURE OF THE SCHOOL", link: "#" },
      { id: 2, name: "ANNUAL ACADEMIC CALANDER", link: "#" },
      { id: 3, name: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)", link: "#" },
      { id: 4, name: "LIST OF PARENTS TEACHER ASSOCIATION (PTA) MEMBERS", link: "#" },
      { id: 5, name: "LAST THREE YEAR RESULT OF THE BOARD EXAMINATION AS PE APPLICABILITY", link: "#" },
    ]
  },
  {
    id: "staff",
    title: "D. Staff (Teaching)",
    icon: Users,
    data: [
      { label: "PRINCIPAL", value: "1" },
      { label: "TOTAL NO. OF TEACHERS", value: "25" },
      { label: "PGT", value: "-" },
      { label: "TGT", value: "-" },
      { label: "PRT", value: "-" },
      { label: "TEACHERS SECTION RATIO", value: "1:30" },
      { label: "DETAILS OF SPECIAL EDUCATOR", value: "-" },
      { label: "DETAILS OF COUNSELLOR AND WELNESS TEACHER", value: "-" },
    ]
  },
  {
    id: "infrastructure",
    title: "E. SCHOOL INFRASTRUCTURE",
    icon: Layout,
    data: [
      { label: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)", value: "To be updated" },
      { label: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ FT)", value: "To be updated" },
      { label: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTERLABS (IN SQ FT)", value: "To be updated" },
      { label: "INTERNET FACILITY (Y/N)", value: "Y" },
      { label: "NO. OF GIRLS TOILETS", value: "To be updated" },
      { label: "NO. OF BOYS TOILETS", value: "To be updated" },
      { label: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE", value: "To be updated" },
    ]
  }
];

export default function DisclosurePage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-custom relative text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge bg-white/10 text-white/80 mb-4 flex items-center justify-center gap-2 max-w-[200px] mx-auto">
              <FileText size={16} /> Official Records
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Mandatory Public Disclosure
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              In accordance with educational guidelines, here are the official records and disclosures for the school.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L60 55C120 50 240 40 360 36C480 32 600 35 720 40C840 45 960 51 1080 51C1200 51 1320 45 1380 42L1440 39V60H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-surface-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div 
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-card border border-surface-100 overflow-hidden"
                >
                  <div className="bg-primary-50 px-6 py-4 border-b border-primary-100 flex items-center gap-3">
                    <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                      <Icon size={20} />
                    </div>
                    <h2 className="text-xl font-heading font-bold text-primary-900">{section.title}</h2>
                  </div>

                  {/* Render Table Data if text Data is present */}
                  {section.data && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <tbody>
                          {section.data.map((row, idx) => (
                            <tr key={idx} className="border-b border-surface-100 last:border-0 hover:bg-surface-50 transition-colors">
                              <td className="py-4 px-6 text-sm font-semibold text-slate-700 w-1/2 align-top">{row.label}</td>
                              <td className="py-4 px-6 text-sm text-slate-600 align-top">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Render Document Listing if documents are present */}
                  {section.documents && (
                    <div className="p-2 sm:p-4">
                      {section.documents.map((doc, idx) => (
                        <div key={idx} className="flex items-start sm:items-center justify-between gap-4 p-4 border-b border-surface-100 last:border-0 hover:bg-surface-50 rounded-lg transition-colors">
                          <div className="flex items-start gap-3">
                            <span className="text-sm font-bold text-primary-300 w-6 mt-0.5">{doc.id}.</span>
                            <p className="text-sm font-medium text-slate-700">{doc.name}</p>
                          </div>
                          <a href={doc.link} className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-primary-600 bg-primary-50 rounded-md hover:bg-primary-100 hover:text-primary-700 transition-all">
                            <Download size={14} /> <span className="hidden sm:inline">View</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Special Render for Board Results */}
                  {section.id === "results" && (
                    <div className="p-6 border-t border-surface-100 mt-2">
                      <h3 className="text-lg font-heading font-bold text-primary-800 mb-4">Board Examination Results</h3>
                      
                      <h4 className="text-sm font-bold text-slate-700 mb-2">Result Class X</h4>
                      <div className="overflow-x-auto mb-6 rounded-lg border border-surface-200">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-surface-100 text-slate-700">
                            <tr>
                              <th className="py-3 px-4 font-semibold">S.No.</th>
                              <th className="py-3 px-4 font-semibold">YEAR</th>
                              <th className="py-3 px-4 font-semibold">REGISTERED STUDENTS</th>
                              <th className="py-3 px-4 font-semibold">STUDENTS PASSED</th>
                              <th className="py-3 px-4 font-semibold">PASS PERCENTAGE</th>
                              <th className="py-3 px-4 font-semibold">REMARK</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Empty Placeholders */}
                            <tr className="border-b border-surface-100"><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td></tr>
                            <tr className="border-b border-surface-100"><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td></tr>
                          </tbody>
                        </table>
                      </div>

                      <h4 className="text-sm font-bold text-slate-700 mb-2">Result Class XII</h4>
                      <div className="overflow-x-auto rounded-lg border border-surface-200">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-surface-100 text-slate-700">
                            <tr>
                              <th className="py-3 px-4 font-semibold">S.No.</th>
                              <th className="py-3 px-4 font-semibold">YEAR</th>
                              <th className="py-3 px-4 font-semibold">REGISTERED STUDENTS</th>
                              <th className="py-3 px-4 font-semibold">STUDENTS PASSED</th>
                              <th className="py-3 px-4 font-semibold">PASS PERCENTAGE</th>
                              <th className="py-3 px-4 font-semibold">REMARK</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-surface-100"><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td></tr>
                            <tr className="border-b border-surface-100"><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td><td className="py-3 px-4">-</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
