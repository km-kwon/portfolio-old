# React × Zustand × Closure: stale closure 방지 전략 기술 정리

React 컴포넌트 내부에서 Zustand 상태를 사용할 때, `useCallback`과 클로저가 결합되면 “stale closure(오래된 값 참조)” 문제가 발생할 수 있다. 이 문서는 해당 이슈의 원인과 근본적인 해결 원리를 기술적으로 명확히 정리한다.

---

# 🧠 1. stale closure 문제의 본질

React 컴포넌트는 리렌더링될 때마다 함수 본문이 다시 실행되며, 그 과정에서 **새로운 함수 객체가 생성된다**. 따라서 다음 구조는 stale closure를 유발한다.

```tsx
const value = useStore((s) => s.value);

const handle = useCallback(() => {
  console.log(value); // stale 가능
}, []);
```

여기서 `value`는 최초 렌더링 시점에 캡처된 클로저 값이고,

`useCallback([])`은 이 함수가 다시 생성되는 것을 방지하므로,

리렌더 후의 최신 value가 반영되지 않는다.

➡ **문제 원인 = useCallback이 클로저를 고정시키기 때문에 발생한다.**

---

# 🔍 2. 의존성 배열로 stale closure 해결

```tsx
const handle = useCallback(() => {
  console.log(value);
}, [value]);
```

의존성 배열에 `value`를 추가하면:

- `value`가 변할 때마다 함수가 재생성됨
- 새 함수는 최신 value를 클로저로 캡처함

➡ stale closure 문제 해결

➡ 하지만 재생성 비용이 증가할 수 있음

---

# 🛠 3. Zustand의 `getState()`를 사용하면 stale closure 문제 자체가 사라짐

Zustand의 상태는 React state가 아니라 **전역 힙(Store 객체)**에 존재하는 불변성(global mutable state) 구조다.

```tsx
const handle = useCallback(() => {
  const current = useStore.getState().value;
  console.log(current); // 항상 최신 값
}, []);
```

### 이 방식의 특징:

### ✔ “클로저로 캡처된 값”을 사용하지 않음

→ stale closure 구조 자체가 성립하지 않음

### ✔ useCallback으로 함수가 재생성되지 않아도 상관 없음

→ 함수는 고정되지만 내부 로직은 매번 Zustand store에서 최신 상태를 직접 조회

### ✔ React의 렌더 사이클과 무관

→ Zustand store는 독립적인 전역 힙 객체이며, React 클로저의 영향을 받지 않음

➡ **근본적으로 stale closure를 방지하는 가장 안전한 패턴**

---

# 🧩 4. 메모리/구조적 관점에서 정확한 설명

### React state

- 렌더링 시점에 캡처됨 (클로저 기반)
- useCallback과 함께 사용 시 stale closure 위험 존재
- 컴포넌트 렌더 사이클에 종속

### Zustand state (`getState()`)

- 전역 힙(global store)에 존재
- React의 클로저 캡처와 무관
- useCallback 재생성 여부와 무관하게 항상 최신 데이터를 조회함
- stale closure → **구조적으로 발생 불가능**

---

# 📘 5. 결론 (기술 문서용 요약)

> Zustand의 getState()를 사용하면 stale closure 문제를 구조적으로 차단할 수 있다.
>
> 이는 클로저 기반 변수 참조가 아니라, 글로벌 store 힙 객체에서 값을 직접 조회하는 방식이기 때문이다.
>
> 결과적으로 useCallback의 메모이제이션 여부와 무관하게 항상 최신 상태를 사용할 수 있으며,
>
> React 렌더 사이클과 Zustand의 상태 시스템을 독립적으로 운용할 수 있게 된다.

---

# 📎 최종 정리

> React 환경에서 Zustand를 사용할 때 useCallback이 클로저를 고정하여 stale closure를 유발하는 문제를 경험했다. 이를 해결하기 위해, Zustand의 getState()를 사용하여 최신 상태를 글로벌 store에서 직접 조회하는 구조로 전환하였다. 이 방식은 클로저 캡처에 의존하지 않기 때문에 stale closure가 구조적으로 발생하지 않으며, useCallback 메모이제이션을 그대로 유지하면서도 최신 Zustand state를 정확하게 다룰 수 있는 안정적인 패턴이다.
