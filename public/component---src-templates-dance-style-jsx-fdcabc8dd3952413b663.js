(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{eu3u:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=a("Wbzz"),l=a("L6Je"),r=a("vOnD"),c=a("qhky"),p=r.a.div.withConfig({displayName:"DanceStyle__Wrapper",componentId:"sc-1vdtzz8-0"})(["display:flex;margin:30px;justify-content:center;color:#42a0ff;"]),d=r.a.div.withConfig({displayName:"DanceStyle__Details",componentId:"sc-1vdtzz8-1"})(["display:flex;flex-direction:column;margin-left:50px;"]),m=r.a.h1.withConfig({displayName:"DanceStyle__Name",componentId:"sc-1vdtzz8-2"})(["color:#0582ff;"]),s=r.a.p.withConfig({displayName:"DanceStyle__Description",componentId:"sc-1vdtzz8-3"})(["margin:10px 0;width:700px;line-height:24px;"]),f=r.a.p.withConfig({displayName:"DanceStyle__Cost",componentId:"sc-1vdtzz8-4"})(["margin:15px 0;"]),u=Object(r.a)(i.a).withConfig({displayName:"DanceStyle__StyledLink",componentId:"sc-1vdtzz8-5"})(["margin-top:50px;color:#0582ff;text-decoration:none;&:hover{color:#ff07c9;}"]),g=r.a.ul.withConfig({displayName:"DanceStyle__List",componentId:"sc-1vdtzz8-6"})(["margin-left:15px;"]),y=r.a.li.withConfig({displayName:"DanceStyle__ListItem",componentId:"sc-1vdtzz8-7"})(["margin:5px 0;"]),h=r.a.form.withConfig({displayName:"DanceStyle__Form",componentId:"sc-1vdtzz8-8"})(["display:flex;flex-direction:column;width:600px;color:#0582ff;margin:0 auto;"]),x=r.a.input.withConfig({displayName:"DanceStyle__Input",componentId:"sc-1vdtzz8-9"})(["margin:10px 0;padding:10px;border-color:#0582ff;border-radius:4px;"]),z=r.a.textarea.withConfig({displayName:"DanceStyle__Textarea",componentId:"sc-1vdtzz8-10"})(["padding:10px;border-color:#0582ff;border-radius:4px;min-height:200px;"]),v=r.a.button.withConfig({displayName:"DanceStyle__FormBtn",componentId:"sc-1vdtzz8-11"})(["width:100%;height:35px;background-color:#0582ff;color:#ffffff;border:none;border-radius:4px;padding:10px 30px;margin:30px auto;&:hover{cursor:pointer;color:#0582ff;background-color:#ffffff;border:2px solid #0582ff;}"]),_=r.a.img.withConfig({displayName:"DanceStyle__Img",componentId:"sc-1vdtzz8-12"})(["width:300px;height:300px;"]);t.default=function(e){var t=e.data.dance.danceStyle,a=o.a.useState(""),n=a[0],i=a[1],r=o.a.useState(""),w=r[0],b=r[1];return o.a.createElement(l.a,null,o.a.createElement(c.a,{title:"Dancing Gatsby - "+t.name}),o.a.createElement(p,null,o.a.createElement(_,{src:t.image}),o.a.createElement(d,null,o.a.createElement(m,null,t.name),o.a.createElement(s,null,t.description),o.a.createElement(f,null,"Costs: ",t.price,"$ per hour"),o.a.createElement("h3",null,"Available instructors:"),o.a.createElement(g,null,t.instructors.map((function(e){return o.a.createElement(y,{key:e.slug},o.a.createElement(u,{to:"/instructors/"+e.slug},e.name))}))))),o.a.createElement(h,{onSubmit:function(e){e.preventDefault(),console.log(n,w),i(""),b("")}},o.a.createElement("h3",null,"Apply for classses"),o.a.createElement(x,{name:"name",value:w,onChange:function(e){return b(e.target.value)}}),o.a.createElement(z,{name:"message",value:n,onChange:function(e){return i(e.target.value)}}),o.a.createElement(v,{type:"submit"},"Apply!")))}}}]);
//# sourceMappingURL=component---src-templates-dance-style-jsx-fdcabc8dd3952413b663.js.map