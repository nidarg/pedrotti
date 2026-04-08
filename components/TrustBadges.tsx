// import { Shield } from "lucide-react";
// import SectionContainer from "./layout/SectionContainer";
// import { siteData } from "../lib/site-data";
// import { trustBadgeIcons } from "../lib/trust-badge-icons";

// export default function TrustBadges() {
//   return (
//     <SectionContainer className="py-12">
//       <div className="rounded-3xl bg-zinc-50 p-6 md:p-8">
//         <div className="max-w-2xl">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
//             Affidabilità
//           </p>

//           <h2 className="mt-3 text-2xl font-bold sm:text-4xl">
//             Un partner affidabile per assistenza e recupero veicoli
//           </h2>

//           <p className="mt-4 text-lg leading-8 text-zinc-600">
//             Pedrotti Group opera con personale specializzato, assistenza H24 e
//             servizi dedicati per privati, aziende, flotte e mezzi pesanti.
//           </p>
//         </div>

//         <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
//           {siteData.trustBadges.map((badge) => {
//             const Icon = trustBadgeIcons[badge.iconKey] ?? Shield;

//             return (
//               <div
//                 key={badge.title}
//                 className="rounded-2xl border border-zinc-200 bg-white p-5"
//               >
//                 <div className="inline-flex rounded-xl bg-red-50 p-3 text-red-600">
//                   <Icon size={22} />
//                 </div>

//                 <h3 className="mt-4 text-base font-semibold text-zinc-900">
//                   {badge.title}
//                 </h3>

//                 <p className="mt-2 text-sm leading-6 text-zinc-600">
//                   {badge.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </SectionContainer>
//   );
// }