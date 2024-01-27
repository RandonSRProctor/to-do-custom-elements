import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';
import {
  selectToDoListItems,
  selectPage,
  selectDBResponse,
  updateDBResponse,
} from './redux/slices/toDoListSlice';
import {
  AppHeader,
  Gutter,
  HamburgerIcon,
  UserIcon,
  AppContent,
  ToDoList,
  NewToDoForm,
  NewTodoInput,
  NewToDoSubmitButton,
} from './customElements';
import { useEffect } from 'react';

window.document.body.classList.add('bg-sky-500');

async function fetchAndResponseExample() {
  const response = await fetch('http://localhost:8080/notes/');
  const responseObject = await response.json();
  return responseObject;
}

export function App() {
  const toDoListContents = useAppSelector(selectToDoListItems);
  const page = useAppSelector(selectPage);
  const dbResponse = useAppSelector(selectDBResponse);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const responseObject = fetchAndResponseExample();
    dispatch(updateDBResponse(JSON.stringify(responseObject)));
  });

  if (page === 'sign-in') {
    return (
      <>
        <div className="flex justify-center">
          <div className="w-64 pt-8">
            <form
              className="flex flex-col"
              onSubmit={event => event.preventDefault()}
            >
              <div className="pb-2">
                <input
                  className="rounded w-64 pl-1"
                  placeholder="username"
                  type="text"
                ></input>
              </div>
              <div className="pb-2">
                <input
                  className="rounded w-64 pl-1"
                  placeholder="password"
                  type="password"
                ></input>
              </div>
              <button className="rounded bg-blue-800 text-white" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  if (page === 'main') {
    return (
      <>
        <AppHeader className="bg-indigo-800 py-1 flex justify-between">
          <Gutter className="pl-2 pt-1">
            <HamburgerIcon className="w-11 h-11" />
          </Gutter>
          <header className="bg-indigo-800 text-white text-center">
            <h1 className="text-3xl">To Do</h1>
            <p className="text-xs italic text-yellow-200">
              with Custom Elements
            </p>
          </header>
          <Gutter className="pr-2 pt-1">
            <UserIcon className="w-11 h-11" />
          </Gutter>
        </AppHeader>
        <AppContent className="pt-6 px-6 lg:pt-36 lg:px-48 w-screen">
          <Gutter className="pb-2">
            <div className="pb-2">
              <button
                onClick={async () => {
                  const response = await fetch('http://localhost:8080/notes/');
                  const responseObject = await response.json();
                  console.log(responseObject);
                  dispatch(updateDBResponse(JSON.stringify(responseObject)));
                }}
                className="border border-black rounded bg-blue-900 text-white p-1"
              >
                Get Notes
              </button>
              <span>{dbResponse}</span>
            </div>
            <Gutter className="pb-2">
              <ToDoList className="TODO-LIST rounded bg-white">
                <Gutter className="p-2">
                  <h1 className="text-2xl border-b-2 border-sky-900 text-sky-900">
                    To Do:
                  </h1>
                </Gutter>
                <div className="LIST px-2 text-base text-sky-900">
                  <ol>
                    {toDoListContents.map((entry, index) => (
                      <li className="ENTRY" key={entry}>
                        <Gutter className="pb-2">
                          {index + 1}. {entry}
                        </Gutter>
                      </li>
                    ))}
                  </ol>
                </div>
              </ToDoList>
            </Gutter>
            <NewToDoForm className="pb-2 flex flex-row">
              <NewTodoInput className="rounded-l text-base w-3/4" />
              <div className="FACADE w-1/4 bg-white p-1 rounded-r">
                <div className="HOLEPUNCH bg-sky-500 rounded p-1">
                  <NewToDoSubmitButton className=" border border-violet-800 bg-violet-600 text-white rounded w-full">
                    Add To Do
                  </NewToDoSubmitButton>
                </div>
              </div>
            </NewToDoForm>
          </Gutter>
        </AppContent>
      </>
    );
  }
}
