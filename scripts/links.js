document.addEventListener("DOMContentLoaded",(function(){const baseURL="",linksURL="data/links.json",ul=document.querySelector("#weeks-content");async function getLinks(){try{const response=await fetch(linksURL);if(!response.ok)throw Error(await response.text());{const data=undefined;displayLinks((await response.json()).weeks)}}catch(error){console.log(error)}}function displayLinks(weeks){weeks.forEach(week=>{let weekLi=document.createElement("li");weekLi.textContent=week.week+": ",ul.appendChild(weekLi),week.links.forEach((activity,index)=>{let aActivity=document.createElement("a");if(aActivity.textContent=activity.title+" ",aActivity.setAttribute("href",activity.url+" "),weekLi.append(aActivity),index<week.links.length-1){let separator=document.createElement("span");separator.textContent="|",weekLi.appendChild(separator)}})})}getLinks()}));