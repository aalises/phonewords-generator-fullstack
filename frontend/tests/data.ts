export default {
    submitting: {
      number: '',
      data: {
        success: false ,
        phonewords: [],
        error: ''
      },
      isSubmitting: true
    },
    initial: {
      number: '',
      data: {
        success: false ,
        phonewords: [],
        error: ''
      },
      isSubmitting: false
    },
    number: {
      number: '66743',
      data: {
        success: true ,
        phonewords: ['test','phonewords'],
        error: ''
      },
      isSubmitting: false
  
    },
    alert: {
      number: '',
      data: {
        success: false ,
        phonewords: [],
        error: 'Sample Error Message'
      },
      isSubmitting: false
    }
}