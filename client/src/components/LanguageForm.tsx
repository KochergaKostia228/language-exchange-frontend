import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getLanguages} from "../store/reducer/action_creators/LanguageCreators";
import {putUserLanguages} from "../store/reducer/action_creators/UserCreators";

const LanguageForm = () => {
    const dispatch = useAppDispatch()
    const {languages} = useAppSelector(state => state.LanguageReducer)
    let native: number[] = []
    let target: number[] = []

    useEffect(() => {
        dispatch(getLanguages())
    }, []);

    const submit = () => {
        dispatch(putUserLanguages(target, native))
    }

    return (
        <form>
            <p>hhnjnjnjnjnjn</p>
            {languages.map((item) =>
                <div className='d-flex'>
                    <h2 key={item.id}>{item.name}:</h2>
                    <select className="form-select form-select-lg mb-3 mx-2"
                            aria-label="Large select example"
                            onChange={(e) => {
                                const selectedValue = e.target.value;
                                const languageId = item.id;

                                if(selectedValue === "native") {
                                    if(!native.includes(languageId)) {
                                        native.push(languageId)
                                    }
                                    if(target.includes(languageId)) {
                                        target = target.filter(num => num !== languageId)
                                    }
                                }else if(selectedValue === "target"){
                                    if(!target.includes(languageId)) {
                                        target.push(languageId)
                                    }
                                    if(native.includes(languageId)) {
                                        native = native.filter(num => num !== languageId)
                                    }
                                }
                            }}
                    >
                        <option value="" disabled>Open this select menu</option>
                        <option value="native">Native</option>
                        <option value="target">Target</option>
                    </select>
                </div>
            )}
            <button type='submit' className='btn btn-success' onClick={submit}>Submit</button>
        </form>
    );
};

export default LanguageForm;