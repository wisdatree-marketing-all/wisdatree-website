// Wisdatree v7 — no third-party form service required.
// WhatsApp and email are composed in the VISITOR'S own app. The visitor must press Send.
const BUSINESS_EMAIL = 'marketing@wisdatree.com';
const WHATSAPP_NUMBERS = { default: '917010100644', care: '919344010644' };
const dialog=document.querySelector('#enquiry-dialog');
const form=document.querySelector('#enquiry-form');
const divisionField=document.querySelector('#form-division');
const subjectField=document.querySelector('#form-subject');
const interestField=document.querySelector('#form-interest');
const statusEl=document.querySelector('#form-status');
const submitButton=document.querySelector('#submit-button');
const options={
 school:['Tamil','Malayalam','Hindi','Other programmes','General school enquiry'],
 care:["Women's health",'Pregnancy & motherhood','Child health','Adolescent & teen health',"Men's health",'Mental wellbeing','Preventive health & nutrition','Webinars & events','Health partnership','Other'],
 works:['Workplace Tamil training','Workplace Kannada training','Other native-language training','Industry-specific training','Business partnership','Other'],
 general:['WisdaSchool','WisdaCare','WisdaWorks','Partnership','Other']
};
const names={school:'WisdaSchool',care:'WisdaCare',works:'WisdaWorks',general:'Wisdatree'};
let activeTrigger=null;
function openForm(type,course){
 activeTrigger=document.activeElement;
 const target=options[type]?type:'general';
 form.reset();statusEl.textContent='';statusEl.className='form-status';
 divisionField.value=names[target];subjectField.value=`New ${names[target]} enquiry`;
 document.querySelector('#form-title').textContent=target==='general'?'Get in touch':`Enquire about ${names[target]}`;
 document.querySelector('#form-subtitle').textContent=target==='works'?'Tell us about your team and training requirements.':target==='care'?'Choose a health education topic or ask about an event.':'Tell us what you would like to learn about.';
 interestField.innerHTML='<option value="">Select an option</option>'+options[target].map(x=>`<option value="${x}">${x}</option>`).join('');
 if(course&&options[target].includes(course))interestField.value=course;
 document.querySelector('#school-extra').classList.toggle('hidden',target!=='school');
 document.querySelector('#works-extra').classList.toggle('hidden',target!=='works');
 document.querySelector('#form-learner').disabled=target!=='school';
 document.querySelector('#form-organization').disabled=target!=='works';
 submitButton.disabled=false;submitButton.textContent='Send enquiry via WhatsApp ↗';
 const wa=form.querySelector('[name="delivery_method"][value="whatsapp"]');if(wa)wa.checked=true;
 dialog.showModal();
}
document.querySelectorAll('[data-form]').forEach(btn=>btn.addEventListener('click',()=>openForm(btn.dataset.form,btn.dataset.course)));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>activeTrigger?.focus());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const nav=document.querySelector('#nav');const toggle=document.querySelector('#menu-toggle');
if(nav&&toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
function chosenMethod(){return form.querySelector('[name="delivery_method"]:checked')?.value||'whatsapp';}
form.querySelectorAll('[name="delivery_method"]').forEach(r=>r.addEventListener('change',()=>{
 submitButton.textContent=chosenMethod()==='email'?'Open email app ↗':'Send enquiry via WhatsApp ↗';
 statusEl.textContent='';statusEl.className='form-status';
}));
function data(){const fd=new FormData(form);const g=k=>String(fd.get(k)||'').trim();return {
 division:g('division'),name:g('name'),email:g('email'),phone:g('phone'),country:g('country'),interest:g('interest'),learner_age:g('learner_age'),organization:g('organization'),message:g('message'),subject:g('_subject')
};}
function messageFor(d){const greeting=d.division==='WisdaCare'?'WisdaCare':'Wisdatree';return `Hello ${greeting}, I would like to enquire.\n\nDivision: ${d.division}\nInterest: ${d.interest}\nName: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nCountry: ${d.country||'Not specified'}${d.learner_age?'\nLearner age/grade: '+d.learner_age:''}${d.organization?'\nOrganization: '+d.organization:''}${d.message?'\nMessage: '+d.message:''}`.replaceAll('\\n','\n');}
form.addEventListener('submit',async e=>{
 e.preventDefault();if(!form.reportValidity())return;
 const d=data();statusEl.textContent='';statusEl.className='form-status';
 if(chosenMethod()==='whatsapp'){
    const whatsappNumber=d.division==='WisdaCare'?WHATSAPP_NUMBERS.care:WHATSAPP_NUMBERS.default;
    const url=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageFor(d))}`;
  // A direct link may open the user's WhatsApp app or WhatsApp Web; the visitor must tap Send.
  const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.style.display='none';document.body.append(a);a.click();a.remove();
  statusEl.textContent='Your WhatsApp message is prepared. Please tap Send in WhatsApp to complete your enquiry. We cannot confirm delivery until you send it.';
  statusEl.className='form-status ok';return;
 }
 // Opening a mailto: URL does NOT send the email automatically. The visitor must press Send.
 const subject=d.subject||`New ${d.division} enquiry`;
 const body=messageFor(d);
 const mailto=`mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 statusEl.textContent='Your default email app should open with the enquiry filled in. Please press Send in your email app to finish. If nothing opens, configure a default email application or choose WhatsApp.';
 statusEl.className='form-status ok';
 window.location.href=mailto;
});
