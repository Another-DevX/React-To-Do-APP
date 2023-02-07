import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section className="TodoList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos.length && !props.totalTodos) && props.onEmpty()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}
            <ul className="TodoListUl">
                {!props.loading && props.searchedTodos.map(props.render) || props.children}
            </ul>
        </section>
    );
}

export {TodoList};