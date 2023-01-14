const menuBar= document.querySelector('aside');
const menuBtn = document.querySelector('.menu-btn');
const close = document.querySelector('.close');
const themeToggler = document.querySelector('.theme-toggler');
const menuitem = document.querySelectorAll('.sidebar a');
const updates = document.querySelector('.updates');
const showAll =document.querySelector('.recent-order a');
const order= document.getElementById('order');
const analytics = document.getElementById('analytics');
const recentOrder= document.querySelector('.recent-order table');
const insights = document.querySelector('.insights');
const slaesAnalytics = document.querySelector('.sales-analytics');
const dashboard =document.getElementById('dashboard');
const container = document.querySelector('.container');


// DISPLAY MENUBAR

menuBtn.addEventListener('click', ()=>{
    menuBar.style.display ='block';
})


// CLOSE MENUBAR

close.addEventListener('click', ()=>{
    menuBar.style.display='none';
})


// THEME CHANGE

themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variable');

    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
})




// MENUBAR ACTIVE 

const changeActiveItem = () =>{
    menuitem.forEach(item => {
        item.classList.remove('active');
    })
}

menuitem.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem()
        item.classList.add('active');
        if (item.id == 'msg'){
            document.querySelector('span.active').style.display='none';
            updates.style.boxShadow = '0 0 10px black';
            
            setTimeout(()=>{
                updates.style.boxShadow = 'none';

            },3000);
        }
    })
});


// SHOW ALL PRODUCT

showAll.addEventListener('click', ()=>{
    showAll.innerHTML= 'No Results';
    showAll.style.backgroundColor='orange';
    showAll.style.padding='10px ';
    showAll.style.color="white";
    showAll.style.borderRadius='1rem';
});


// SHOW ON ORDERS


order.addEventListener('click',() => {
    recentOrder.style.boxShadow= '0 0 10px black';

    setTimeout(()=>{
        recentOrder.style.boxShadow= 'none';
    },3000);
});


// ANALYTICS SHOWING ON

analytics.addEventListener('click', ()=>{
    insights.style.boxShadow='0 0 10px black';
    insights.style.borderRadius='1.6rem'
    slaesAnalytics.style.boxShadow='0 0 10px black';
    slaesAnalytics.style.borderRadius='1.6rem'

    setTimeout(()=>{
        insights.style.boxShadow='none';
        insights.style.borderRadius='0'
        slaesAnalytics.style.boxShadow='none';
        slaesAnalytics.style.borderRadius='0';
    },2000)
})


//  DASHBOARD HIGHLIGHT CONTAINER

dashboard.addEventListener('click', ()=>{
    container.style.boxShadow='0 0 10px black';
    setTimeout(()=>{
        container.style.boxShadow='none';
    },2000)
})