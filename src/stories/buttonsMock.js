/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import NnButton from '../components/NnButton.vue';
import BtnDocs from '../components/BtnDocs.vue';
import { usageDocs } from '../components/usageDocs.js';
import marked from 'marked'

const allButtons = {
  leftIcon: {
    components: { NnButton },
    template: `<nn-button 
                :handle-click="log" 
                :width="90" 
                :height="30" 
                borderColor="#d23232;"
                bg="#fff" 
                color="#d23232" 
                :borderRadius="4"
                iconNameLeft='upload'
              >
                Button
              </nn-button>`,
    methods: { log: action('clicked text button') }
  },
  rightIcon: {
    components: { NnButton, BtnDocs},
    computed: {
      parseMd() {
        return marked(usageDocs, {
          sanitize: true
        })
      }
    },
    template: `
            <div>
            <div class="left-part">
              <nn-button 
                :handle-click="log" 
                :width="90" 
                :height="30" 
                borderColor="#d23232;"
                bg="#fff" 
                color="#d23232" 
                :borderRadius="4"
                iconNameRight='upload'
              >
                Button!!!
              </nn-button>
            </div>
              <btn-docs :text="parseMd"/>
          </div>  
              `,
    methods: { log: action('clicked text button') }
  }
}

export { allButtons }