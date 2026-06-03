// import { useEffect } from "react";
// import { initAlLaithIntegrationScene } from "../../assets/js/integration/initAlLaithIntegrationScene";
// import "../../assets/css/sections.css";

// export default function AlLaithIntegrationSection() {
//   useEffect(() => {
//     const cleanup = initAlLaithIntegrationScene();

//     return () => {
//       if (cleanup) cleanup();
//     };
//   }, []);

//   return (
//     <section className="allaith-integration-section scroll-reveal">
//       <div className="allaith-integration-bg"></div>

//       <div className="allaith-integration-title-wrap">
//         <p className="allaith-integration-kicker">
//           AL-LAITH TECHNOLOGY INTEGRATION
//         </p>

//         <h2 className="allaith-integration-title">
//           الليث مركز ربط الأنظمة الذكية
//         </h2>

//         <p className="allaith-integration-subtitle">
//           ربط حلول المراقبة، التحكم، الشبكات، مراكز البيانات، المدن الذكية
//           والصيانة ضمن منظومة واحدة تقودها شركة الليث.
//         </p>
//       </div>

//       <div className="allaith-integration-visual">
//         <div id="allaith-integration-canvas"></div>
//       </div>
//     </section>
//   );
// }

import { useEffect } from "react";
import { initAlLaithIntegrationScene } from "../../assets/js/integration/initAlLaithIntegrationScene";
import "../../assets/css/sections.css";

export default function AlLaithIntegrationSection() {
  useEffect(() => {
    const cleanup = initAlLaithIntegrationScene();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section className="allaith-integration-section scroll-reveal">
      <div className="allaith-integration-bg"></div>

      <div className="allaith-integration-title-wrap">
        <p className="allaith-integration-kicker">
          AL-LAITH TECHNOLOGY INTEGRATION
        </p>

        <h2 className="allaith-integration-title">
          الليث مركز ربط الأنظمة الذكية
        </h2>

        <p className="allaith-integration-subtitle">
          ربط حلول المراقبة، التحكم، الشبكات، مراكز البيانات، المدن الذكية
          والصيانة ضمن منظومة واحدة تقودها شركة الليث.
        </p>
      </div>

      <div className="allaith-integration-visual">
        <div id="allaith-integration-canvas"></div>
      </div>
    </section>
  );
}