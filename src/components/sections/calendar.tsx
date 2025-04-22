"use client";

/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  import { Section } from "@/components/section";

  export default function Calendar() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"30min"});
		cal("ui", {
		  "hideEventTypeDetails": false,
		  "layout": "month_view",
		  "theme": "dark"
		});
	  })();
	}, [])
	return (
	  <Section id="calendar" title="SHIVA WEB3" subtitle="Book a Call">
		<div className="border-x border-t">
			<div className="w-full bg-black">
					<Cal 
					namespace="30min"
					calLink="slinga/30min"
					style={{
					width:"100%",
					height:"100%",
					minHeight: "600px",
					background: "rgb(15, 15, 15)",
					borderRadius: "8px",
					colorScheme: "dark"
					}}
					config={{
					layout: "month_view",
					theme: "dark"
					}}
					/>
			  </div>
		</div>
	  </Section>
	);
  };
  