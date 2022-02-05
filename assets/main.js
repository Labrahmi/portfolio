const header = document.querySelector('header')
const body = document.querySelector('body')
const ul_links = document.getElementsByClassName('ul_links')


// console.log(body.scrollHeight)


window.addEventListener('scroll',function(){
    if(window.innerWidth < 520){
        if(window.scrollY >= 0){
            header.classList.add('headerUp')
        }
        else{
            header.classList.remove('headerUp')
        }
    }
    else{
        if(window.scrollY > 55){
            header.classList.add('headerUp')
        }
        else{
            header.classList.remove('headerUp')
        }

        // =====================
        if(window.scrollY > 0 ){
            ul_links[0].classList.add('ul_active')
            ul_links[1].classList.remove('ul_active')
            ul_links[2].classList.remove('ul_active')
            ul_links[3].classList.remove('ul_active')
            ul_links[4].classList.remove('ul_active')
        }
        // =====
        if(window.scrollY > 550 ){
            ul_links[1].classList.add('ul_active')
            ul_links[0].classList.remove('ul_active')
            ul_links[2].classList.remove('ul_active')
            ul_links[3].classList.remove('ul_active')
            ul_links[4].classList.remove('ul_active')
        }
        // =====
        if(window.scrollY > 1900 ){
            ul_links[2].classList.add('ul_active')
            ul_links[0].classList.remove('ul_active')
            ul_links[1].classList.remove('ul_active')
            ul_links[3].classList.remove('ul_active')
            ul_links[4].classList.remove('ul_active')
        }
        if(window.scrollY > 2599 ){
            ul_links[3].classList.add('ul_active')
            ul_links[2].classList.remove('ul_active')
            ul_links[0].classList.remove('ul_active')
            ul_links[1].classList.remove('ul_active')
            ul_links[4].classList.remove('ul_active')
        }
        if(window.scrollY > 3400 ){
            ul_links[4].classList.add('ul_active')
            ul_links[2].classList.remove('ul_active')
            ul_links[0].classList.remove('ul_active')
            ul_links[1].classList.remove('ul_active')
            ul_links[3].classList.remove('ul_active')
        }
        // =====
    }
    
})







/////////////////////
const qi_ttl_bac = 'Baccalaureate in Electrical Sciences and Technologies <span style="font-size: 80%;">(STE)</span>'
const qi_sbt_bac = 'Technical High School <br> Laayoune, Morocco'
const qi_tme_bac = '<i class="bx bx-calendar"></i> 2017 - 2020'
// ****
const qi_ttl_bts = 'BTS in Information Systems Development'
const qi_sbt_bts = 'Lisane Eddine Ibn Al-Khatib <br> High School <br> Laayoune, Morocco'
const qi_tme_bts = '<i class="bx bx-calendar"></i> 2020 - 2022'
/////////////////////

// -------------------- //

/////////////////////
const qi_ttl_slb = 'Developer of GUIs in Vb.net and SQL Server (Traineeship)'
const qi_sbt_slb = 'SELECT BUREAU Sarl <br> Agadir, Morocco'
const qi_tme_slb = '<div class="my_link" >Jul 2021 - Aug 2021 <i class="bx bx-chevron-down"></i></div>'
// ****
const qi_ttl_hzc = 'Developer in Php and MySql (Traineeship)'
const qi_sbt_hzc = 'HiZi Connect Sarl <br> Mohammedia, Morocco'
const qi_tme_hzc = '<a class="my_link" href="#">Feb 2022 - Jun 2022 <i class="bx bx-chevron-down"></i></a>'
/////////////////////



// =====================
const wo_ex_item = document.getElementsByClassName('Wo__Ex_item')
const qualf_cont = document.getElementsByClassName('qualifications-container') 
/* ---------------- */
const qi_title = document.getElementsByClassName('qi_title')
const qi_suble = document.getElementsByClassName('qi_subtitle')
const qi_time = document.getElementsByClassName('qi_time')
//



for(let i=0; i<2; i++){
    wo_ex_item[i].addEventListener('click', ()=>{
        switch (i) {
            case 0:
                if(! wo_ex_item[0].classList.contains('WoEx__active')){
                    wo_ex_item[0].classList.add('WoEx__active')
                    /*------*/
                    qi_title[0].innerHTML = qi_ttl_bac
                    qi_suble[0].innerHTML = qi_sbt_bac
                    qi_time[0].innerHTML = qi_tme_bac
                    /*      -----       */
                    qi_title[1].innerHTML = qi_ttl_bts
                    qi_suble[1].innerHTML = qi_sbt_bts
                    qi_time[1].innerHTML = qi_tme_bts
                    /*------*/
                }
                wo_ex_item[1].classList.remove('WoEx__active')



            break;

            // ===================

            case 1:
                if(! wo_ex_item[1].classList.contains('WoEx__active')){
                    wo_ex_item[1].classList.add('WoEx__active')
                    /*------*/
                    qi_title[0].innerHTML = qi_ttl_slb
                    qi_suble[0].innerHTML = qi_sbt_slb
                    qi_time[0].innerHTML = qi_tme_slb
                    /*      -----       */
                    qi_title[1].innerHTML = qi_ttl_hzc
                    qi_suble[1].innerHTML = qi_sbt_hzc
                    qi_time[1].innerHTML = qi_tme_hzc
                    /*------*/
                }
                wo_ex_item[0].classList.remove('WoEx__active')
            break;
        }
    } )
}



// ============================
const over_pop = document.getElementsByClassName('over_pop')
const x = document.getElementsByClassName('bx bx-plus')

// ;;;;;;

qi_time[0].addEventListener('click', ()=>{
    over_pop[0].classList.replace('hideClass', 'showClass');
})
x[0].addEventListener('click', ()=>{
    setTimeout(() => {
        over_pop[0].classList.remove('showClass');
    }, 1);
    setTimeout(() => {
        over_pop[0].classList.add('hideClass');
    }, 1);
})
/*

    over_pop[0].classList.replace('hideClass', 'showClass');
})
x[3].addEventListener('click', ()=>{
    setTimeout(() => {
        over_pop[0].classList.remove('showClass');
    }, 1);
    setTimeout(() => {
        over_pop[0].classList.add('hideClass');
    }, 1);


*/
// ============================


const services__item = document.getElementsByClassName('services__item')
const myemail = document.getElementsByClassName('myemail')

// ------------------- \\
services__item[0].addEventListener('click', ()=>{
    over_pop[1].classList.replace('hideClass', 'showClass');
})
x[1].addEventListener('click', ()=>{
    setTimeout(() => {
        over_pop[1].classList.remove('showClass');
    }, 1);
    setTimeout(() => {
        over_pop[1].classList.add('hideClass');
    }, 1);
})
// ------------------- \\

// ------------------- \\
services__item[1].addEventListener('click', ()=>{
    over_pop[2].classList.replace('hideClass', 'showClass');
})
x[2].addEventListener('click', ()=>{
    setTimeout(() => {
        over_pop[2].classList.remove('showClass');
    }, 1);
    setTimeout(() => {
        over_pop[2].classList.add('hideClass');
    }, 1);
})
// ------------------- \\

// ------------------- \\
services__item[2].addEventListener('click', ()=>{
    over_pop[3].classList.replace('hideClass', 'showClass');
})
x[3].addEventListener('click', ()=>{
    setTimeout(() => {
        over_pop[3].classList.remove('showClass');
    }, 1);
    setTimeout(() => {
        over_pop[3].classList.add('hideClass');
    }, 1);
})
// ------------------- \\
myemail[0].addEventListener('click',()=>{
    over_pop[4].classList.replace('hideClass', 'showClass');
})
x[4].addEventListener('click', ()=>{
    setTimeout(() => {
        over_pop[4].classList.remove('showClass');
    }, 1);
    setTimeout(() => {
        over_pop[4].classList.add('hideClass');
    }, 1);
})
// ------------------- \\








const menu_toggle = document.getElementsByClassName('menu_toggle')
const toggle__ = document.getElementsByClassName('toggle-menu')
const tgitem = document.getElementsByClassName('tg-mn-item')

menu_toggle[0].addEventListener('click',()=>{
    header.classList.add('headerUp')
    if(toggle__[0].classList.contains('hideClass')){
        toggle__[0].classList.replace('hideClass','showClass')            
        setTimeout(() => {
            toggle__[0].classList.add('toggle-menu-2')
        }, 20);
    }
    else{
        header.classList.remove('headerUp')
        toggle__[0].classList.remove('toggle-menu-2')        
        setTimeout(() => {
            toggle__[0].classList.replace('showClass','hideClass')
        }, 720);
    }
})

for(let i=0; i<tgitem.length; i++){
    tgitem[i].addEventListener('click',()=>{
        setTimeout(() => {
            toggle__[0].classList.remove('toggle-menu-2')        
            setTimeout(() => {
                toggle__[0].classList.replace('showClass','hideClass')
            }, 720);
        }, 20);
    })
}



