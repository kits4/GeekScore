<template>
  <section class="the-login-form mt-12">
    <v-card raised outlined dark class="auth-card">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="onSubmit"
      >
        <div class="d-flex align-items-center">
          <v-icon class="mr-3">{{ `mdi-${formProps.icon}` }}</v-icon>
          <h3 class="app-headline">{{ formProps.title }}</h3>
        </div>
        <v-card-text>
          <div id="firebaseui-auth-container" />
          <div id="loader" class="text-center">
            <v-progress-circular size="30" indeterminate color="secondary" />
          </div>
          <div class="d-md-flex d-none or-wrapper">
            <span class="or">OR</span>
          </div>
          <v-text-field
            v-model.trim="email"
            clearable
            label="Email"
            type="email"
            prepend-icon="mdi-email-outline"
            :rules="EmailRules"
          />
          <v-text-field
            v-if="formProps.signUp"
            v-model.trim="username"
            clearable
            label="Username"
            type="text"
            prepend-icon="mdi-account-outline"
          />
          <v-text-field
            v-model.trim="password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            autocomplite="on"
            prepend-icon="mdi-lock-outline"
            :append-icon="
              showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
            "
            :rules="passwordRules"
            @click:append="showPassword = !showPassword"
          />
          <v-text-field
            v-if="formProps.signUp"
            v-model.trim="confirmPassword"
            :type="showPassword ? 'text' : 'password'"
            label="Confirm password"
            prepend-icon="mdi-lock-outline"
            :append-icon="
              showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
            "
            :rules="[comparePasswords]"
            @click:append="showPassword = !showPassword"
          />
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn class="submit-btn" ripple type="submit" :disabled="!valid"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-form>
      <div class="text-center mb-3">
        <router-link
          v-if="!formProps.signUp"
          :to="{ name: 'resetPass' }"
          class="link"
          >Forgot password?</router-link
        >
      </div>
      <div class="text-center mb-3">
        <span class="mr-3">{{ formProps.redirectText }}</span>
        <router-link :to="formProps.redirectLink" class="link">{{
          formProps.redirectLinkText
        }}</router-link>
      </div>
    </v-card>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  computed,
  reactive,
  toRefs
} from '@vue/composition-api'
import { fbStart } from '@/auth'
import {
  emailField,
  standardField,
  requiredField,
  shortPassword,
  tooLongField
} from '@/use/validations'

export default defineComponent({
  name: 'TheLoginForm',
  props: {
    formProps: {
      type: Object,
      required: true
    }
  },
  setup(props, ctx) {
    const store = ctx.root.$store
    const formData = reactive({
      email: '',
      password: '',
      username: '',
      confirmPassword: ''
    })
    const showPassword = ref(false)
    const valid = ref(false)
    const EmailRules = [requiredField, emailField, tooLongField]
    const passwordRules = [...standardField, requiredField, shortPassword]

    const comparePasswords = computed(() => {
      return (
        formData.password === formData.confirmPassword ||
        'Passwords do not match'
      )
    })

    const onSubmit = () => {
      if (props.formProps.signUp) {
        store.dispatch('user/signUpUser', formData)
      } else {
        store.dispatch('user/signInUser', formData)
      }
    }

    onMounted(() => {
      fbStart()
    })

    return {
      ...toRefs(formData),
      showPassword,
      valid,
      onSubmit,
      EmailRules,
      passwordRules,
      comparePasswords
    }
  }
})
</script>

<style scoped lang="scss">
.the-login-form {
  .or-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    display: grid;
    place-items: center;
    margin: 50px 0 30px 0;
  }
  .or {
    width: 53px;
    height: 53px;
    font-weight: 700;
    color: #000;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      background-color: #fff;
      height: 1px;
      width: 300px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
