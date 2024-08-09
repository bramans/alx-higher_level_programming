// Sends an HTTP GET request to the "HelloSalut" API to translate a greeting into the language specified by the input with id 'language_code'.
// The translation is then displayed inside the element with id 'hello' when the button with id 'btn_translate' is clicked.
$('document').ready(() => {
  const translate = $('#btn_translate');
  const code = $('#language_code');

  // place request and handle success/failure
  translate.click(() => {
    jQuery.get(
      `https://hellosalut.stefanbohacek.dev/?lang=${code.val()}`,
      (success) => {
        $('#hello').html(`<p>${success.hello}</p>`);
      });
  });
});
