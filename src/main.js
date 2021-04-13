// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/css/loader.scss';

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout,);
  Vue.filter("formatMoney", function (number) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
      
    return formatter.format(number);
  });
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css'
  });
  
  head.script.push({
    type: 'text/javascript',
    src: 'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js',
    body: true,
    id: 'snipcart',
    'data-api-key': 'OTYyNTZkNzEtZWE1Ni00ZmNlLWFlYjYtZDU3NzNmNGRhNjRkNjM3NTEwMzEwNDk5MDY3OTUy',
  })

}
