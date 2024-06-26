import styles from './App.module.css';
import Header from './components/Header/Header';
import WrapperContainer from './components/WrapperContainer/WrapperContainer';
import { useQuizContext } from './contexts/QuizContext/QuizContext';
import FinishScreen from './views/FinishScreen/FinishScreen';
import Main from './components/Main/Main';
import QuestionScreen from './views/QuestionScreen/QuestionScreen';
import StartScreen from './views/StartScreen/StartScreen';
import { useThemeContext } from './contexts/ThemeContext/ThemeContext';

function App() {
  const { theme } = useThemeContext();
  const { state } = useQuizContext();
  const { status } = state;

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <WrapperContainer>
        <Header />
        <Main>
          {(status === 'loading' || status === 'ready') && <StartScreen />}
          {status === 'active' && <QuestionScreen />}
          {status === 'finished' && <FinishScreen />}
        </Main>
      </WrapperContainer>
    </div>
  );
}

export default App;
