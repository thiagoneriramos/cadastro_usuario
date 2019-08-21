<template>
  <row>
    <column class="col-md-12">

      <h1>
        Cadastro de Usuário
      </h1>

      <va-box
          theme="box-primary"
          widgetType="">

          <div slot="content">

            <va-input-group
              title="Nome Completo"
              vaId="nm_completo"
              type="text"
              placeholder="Digite o nome completo"
              require
            >
            </va-input-group>

            <va-input-group
              title="Email"
              vaId="exampleInputEmail1"
              type="email"
              placeholder="Digite o email"
            >
            </va-input-group>

            <va-input-group
              title="Senha"
              vaId="exampleInputPassword1"
              type="password"
              placeholder="Digite a senha"
            >
            </va-input-group>

            <va-input-group
              title="Endereço Completo"
              vaId="nm_completo"
              type="text"
              placeholder="Digite o endereço completo"
            >
            </va-input-group>
            <va-input-group
              title="Upload de foto do usuário"
              vaId="exampleInputFile"
              type="file"
              helpBlock=""
            >
            </va-input-group>
          </div>

          <div slot="footer" v-on:submit="addTodo">
            <button @click="onSubmitClick" class="btn btn-primary">Cadastrar</button>
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
