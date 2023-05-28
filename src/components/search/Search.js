import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Search.module.css';
import { fetchSearchMovies } from '../servise/Api'
import PropTypes from 'prop-types';

const SearchInputSchema = Yup.object().shape({
  search: Yup.string('Enter more than 1 character')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^\S*$/, 'Spaces are not allowed')
    .test(
      'is-valid-search',
      'Search can only contain letters and numbers',
      value => {
        return /^[a-zA-Z0-9]+$/.test(value);
      }
    ),
});


export const Searchbar = ({ onSubmit }) => {
  function handleSubmit(values, { resetForm }) {
  const { search } = values;
  
  // Виклик функції fetchSearchMovies з переданим значенням search
  fetchSearchMovies(search)
    .then((data) => {
      // Обробка результату пошуку
      console.log('Search result:', data);
      // Виклик функції onSubmit з результатом пошуку
      onSubmit(data);
    })
    .catch((error) => {
      // Обробка помилки пошуку
      console.error('Error searching movies:', error);
    });
  
  resetForm();
}
  // function handleSubmit(values, { resetForm }) {
  //   const { search } = values;
  //   onSubmit(search);
  //   resetForm();
  // }

  return (
    <div>
      <Formik
        initialValues={{ search: '' }}
        validationSchema={SearchInputSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <header className={css.Searchbar}>
            <Form className={css.SearchForm}>
              <button type="submit" className={css.SearchForm__button}>
                <span className={css.button__label}>Search</span>
              </button>
              <ErrorMessage name="search" className={css.ErrorMessage} />
              <Field
                name="search"
                className={css.SearchForm__input}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </Form>
          </header>
        )}
      </Formik>
    </div>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
