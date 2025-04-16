import { StyleSheet } from 'react-native';

// --- Общие стили ---
const commonShadow = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.15,
  shadowRadius: 3,
  elevation: 2,
};

const commonInputBorder = {
  borderWidth: 1,
  borderColor: '#000000',
  borderRadius: 6,
};

const commonButton = {
  borderRadius: 6,
  alignItems: 'center',
};

const authShadow = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  elevation: 3,
};

// --- Стили компонентов ---
export const styles = StyleSheet.create({
  // Общий контейнер
  container: {
    flex: 1,
    backgroundColor: 'rgb(251,153,153)',
    paddingHorizontal: 560,
    paddingBottom: 520,
  },

  // Заголовок раздела
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 8,
    ...commonShadow,
    alignSelf: 'stretch',
    textAlign: 'center',
  },

  // Элемент списка
  item: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginVertical: 4,
    ...commonShadow,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  bought: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3498db',
    textDecorationLine: 'line-through',
  },
  details: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },

  // Модалка
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
  },

  // Кнопки
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  // Поля ввода
  input: {
    backgroundColor: '#fff',
    ...commonInputBorder,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 16,
  },

  // Авторизация
  authFlex: {
    flex: 1,
    backgroundColor: 'rgb(251,153,153)',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 850,
  },
  authContainer: {
    backgroundColor: 'rgba(230,19,19,0.2)',
    borderRadius: 10,
    padding: 25,
    ...authShadow,
  },
  authTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#ffffff',
  },
  authInput: {
    backgroundColor: 'rgb(211,205,205)',
    ...commonInputBorder,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#757575',
    marginBottom: 15,
  },
  authInputPlaceholder: {
    color: '#ffffff',
  },
  authButton: {
    backgroundColor: 'rgba(255,0,0,0.18)',
    ...commonButton,
    paddingVertical: 12,
    marginBottom: 15,
  },
  authButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  authLink: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'none',
  },
  authLinkBold: {
    fontWeight: 'bold',
    color: '#3498db',
  },

  // Детали продукта
  detailsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#222',
  },
  detailsImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  detailsText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },

  // Превью изображения
  imagePreview: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#e0e0e0',
  },
});