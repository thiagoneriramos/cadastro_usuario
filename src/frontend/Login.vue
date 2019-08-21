<template>
  <row>
    <column class="col-md-6">
      <va-box
        title="Login"
        theme="box-info"
        :isBorder="true"
        widgetType="">

        <div slot="content">


          <form class="form-horizontal">

            <va-input
              :isHorizontal="true"
              title="Email"
              placeholder="Email"
              type="email"
              vaId="horizontal-email"
              >

            </va-input>

            <va-input
              :isHorizontal="true"
              title="Password"
              placeholder="Password"
              type="password"
              vaId="horizontal-email"
              >

            </va-input>
          </form>

        </div>

        <div slot="footer" class="form-group">
            <button @click="onSubmitClick" class="btn btn-primary" >Login</button>
            <router-link to="/cadastro_usuario" theme="success" class="btn btn-link">Cadastre-se</router-link>
        </div>

      </va-box>
    </column>
  </row>
</template>

<script>
import VABox from '../widgets/VABox'
import VAInputGroup from '../components/VAInputGroup'
import VACheckBox from '../components/VACheckBox'
import VAInput from '../components/VAInput'
import VAButton from '../components/VAButton'
import VATextareaGroup from '../components/VATextareaGroup'
import VAFormGroup from '../components/VAFormGroup'
import VASelect from '../components/VASelect'

export default {
  name: 'general-elements',
  created () {

  },
  components: {
    'va-box': VABox,
    'va-input-group': VAInputGroup,
    'va-checkbox': VACheckBox,
    'va-input': VAInput,
    'va-button': VAButton,
    'va-textarea-group': VATextareaGroup,
    'va-form-group': VAFormGroup,
    'va-select': VASelect
  }
}

</script>
