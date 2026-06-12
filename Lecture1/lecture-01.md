# Lecture 1 — How JavaScript Actually Runs

**Date:** 2026-06-12
**Status:** Complete 🟢
**Course Topic:** V8 Engine & how JS becomes machine code

---

## 🎯 The Big Picture (what this lecture is building toward)

By the end of this lecture, you should be able to explain:
1. What the V8 engine is and where it lives
2. What language V8 is written in, and why
3. The full chain: C++ → Machine Code → CPU
4. The "who compiled the first compiler?" problem (bootstrapping)

---

## 📚 Topic 1: What is V8?

**The simple definition:**
> V8 is a JavaScript engine — a program that lives in your browser (Chrome) and in Node.js. It takes your JavaScript code and turns it into something the computer's CPU can actually run.

**Where it lives:**
- Inside **Chrome** (and any browser based on Chromium — Edge, Brave, etc.)
- Inside **Node.js** (so you can run JS outside the browser)
- Other browsers have their own engines:
  - Firefox → **SpiderMonkey**
  - Safari → **JavaScriptCore** (also called Nitro)
  - React Native → **Hermes**

**What it does:**
```
You write:    let x = 5
You write:    console.log(x + 2)
                       │
                       ▼
              V8 takes this in
                       │
                       ▼
              CPU understands it
                       │
                       ▼
              You see: 7
```

**The one thing to remember:**
> V8 is a **translator** between JavaScript (human-friendly) and machine code (CPU-friendly).

---

## 📚 Topic 2: V8 is written in C++

**Your teacher's first diagram showed:**
```
┌──────────────────────────────────┐
│  Browser                         │
│   ┌──────────┐                   │
│   │ V8 Engine│  ◀── lives here   │
│   └──────────┘                   │
│   ┌──────────┐                   │
│   │ Compiler │  ◀── inside V8    │
│   └──────────┘                   │
└──────────────────────────────────┘
```

**The fact:**
> The people who built V8 at Google **wrote it in C++**. They did NOT write it in JavaScript. (They couldn't — JavaScript needs a runtime to run in. Catch-22.)

**Why C++?**
- C++ is **fast** (close to the hardware)
- C++ gives **fine control** over memory
- C++ is the language used to build most performance-critical software (operating systems, game engines, browsers, etc.)

**The one thing to remember:**
> The language that runs JavaScript (V8) is itself written in C++, not JavaScript.

---

## 📚 Topic 3: The full chain — C++ → Machine Code → CPU

**Your teacher's second diagram showed two translations:**

### Translation #1: How V8 was BUILT (one-time, at Google)
```
C++ source code  ──[Compiler]──▶  Machine Code (101010)
(what Google           (this is what V8 actually IS
 engineers wrote)        inside your browser)
```

### Translation #2: What V8 DOES at runtime (every time you load a webpage)
```
JavaScript code  ──[V8]──▶  Machine Code  ──[CPU]──▶  Output
(your code)        (translation)    (CPU runs it)
```

**The combined picture:**
```
   Translation 1 (one-time, at Google)
   ┌──────────────────────────────────────────┐
   │ C++ code → [Compiler] → Machine Code →─┐ │
   │                                          │ │
   └──────────────────────────────────────────┘ │
                                                  ▼
                              lives in Chrome as V8
                                                  │
   Translation 2 (every time)                    │
   ┌──────────────────────────────────────────┐ │
   │ your JS → [V8] → Machine Code → CPU → output │ │
   └──────────────────────────────────────────┘ │ │
                                                │ │
                                                └─┘
```

**Key insight:**
> The V8 in your browser IS machine code (because V8 was once C++ that got compiled). And V8's job is to compile your JavaScript into more machine code.

---

## 📚 Topic 4: Bootstrapping — "Who compiled the first compiler?"

**The question that confused us:**
> "V8 is written in C++. But C++ needs a compiler too. So who made the FIRST C++ compiler?"

**The short answer:**
> The first compilers were written by **humans typing in 0s and 1s by hand** (or in assembly, which is just 0s and 1s with words). After that, every better compiler was built by an earlier compiler.

### The Rock → Knife → Hammer → House Analogy

| Step | What it is | How it was made |
|------|-----------|-----------------|
| 🪨 1 | A rock (first "tool") | Found in nature, no tool needed |
| 🔪 2 | A sharp stone knife | Shaped using another rock |
| 🔨 3 | A wooden hammer | Carved using the stone knife |
| 🔨 4 | An iron hammer | Beaten into shape using the wooden hammer |
| 🏠 5 | A wooden house | Built using the iron hammer |

**Notice:** the first tool (rock) wasn't made by a tool. After that, every better tool was made by an earlier, worse tool.

### Map that to compilers

| Step | What it is | How it was made |
|------|-----------|-----------------|
| 💾 1 | Raw 0s and 1s | Typed by a human in the 1940s/50s |
| 📝 2 | An assembler | Reads simple text (assembly language) |
| ⚙️ 3 | A working C compiler | Written in assembly by Dennis Ritchie |
| ⚙️ 4 | A C compiler in C | Compiled by the first C compiler (self-hosting!) |
| ⚙️ 5 | A C++ compiler | Written in C, compiled by the C compiler |
| 🚀 6 | V8 (JS engine) | Written in C++, compiled by the C++ compiler |
| 🖥️ 7 | Your JS running | V8 translates it to machine code, CPU runs it |

**The phrase "bootstrapping" comes from:**
> "Pulling yourself up by your own bootstraps" — an impossible thing to do literally, but it means: **start with nothing, build something slightly better, repeat until powerful.**

**The one thing to remember:**
> There is NO infinite loop. The chain has a clear bottom — a human typing 0s and 1s. After that, every better compiler was built by an earlier, worse compiler.

---

## 📚 Topic 5: Data Types (the deep version)

### The two categories

**Primitives (immutable — every assignment copies the value):**
- `string` — text
- `number` — integers and decimals (one type: 64-bit float)
- `boolean` — true / false
- `undefined` — "I haven't decided yet" (default, set by JS)
- `null` — "I deliberately set this to nothing" (set by you)
- `bigint` — for numbers bigger than `Number` can handle (`9007199254740993n`)
- `symbol` — for unique keys that can't collide (`Symbol("id")`)

**Non-primitives (mutable — assignment copies the reference):**
- `object` — key/value pairs
- `array` — a special object with numeric keys
- `function` — a special object you can call

### The first-principles truth: a variable is a LABEL

A variable is not a "box." It's a **label stuck onto a value.**

```
PRIMITIVE:        ┌──────┐     ┌──────┐
                  │  a   │────▶│  30  │
                  └──────┘     └──────┘
                  (label)      (the value)

OBJECT:           ┌──────┐     ┌────────┐     ┌──────────────┐
                  │  p   │────▶│ 0x4A2  │────▶│ {name:"Akshay"}│
                  └──────┘     └────────┘     └──────────────┘
                  (label)      (reference)     (the actual object)
```

**Why this matters:**

```js
// Primitives — copying is safe
let a = 10;
let b = a;   // b is a NEW label, also pointing to 10
b = 70;      // re-point b to 70
console.log(a);  // 10 (unaffected!)

// Objects — copying shares the reference
let p1 = { name: "Akshay" };
let p2 = p1;       // p2 points to the SAME object
p2.name = "Rahul"; // mutates the actual object
console.log(p1.name);  // 😱 "Rahul"!
```

**Engineer rule:** primitives are safe to copy. Objects are not — multiple labels can point to the same object.

### `null` vs `undefined` — the "two flavors of nothing"

| | `undefined` | `null` |
|---|---|---|
| **Meaning** | "I haven't decided yet" | "I deliberately set this to nothing" |
| **Set by** | JavaScript (default) | You (intentional) |
| **Example** | `let a;` | `let a = null;` |
| **When** | A variable exists but has no value | A user-cleared value, an empty result |

**Historical reason:** JS got `null` from Java, then added `undefined` for the uninitialized case. The two overlap and have confused developers for 30 years.

### The famous `typeof` gotchas

```js
typeof 5              // "number"     ✅
typeof "hello"        // "string"     ✅
typeof undefined      // "undefined"  ✅
typeof null           // "object"     🤯 BUG (1995, can't fix)
typeof []             // "object"     (arrays ARE objects)
typeof {}             // "object"     ✅
typeof function(){}   // "function"   (but functions ARE objects too)
```

**Three things to remember:**
1. `typeof null === "object"` is a permanent 25-year-old bug. Use `x === null` to check for null.
2. Arrays report as "object." Use `Array.isArray(x)` to check for arrays.
3. Functions are objects that you can call. The "function" typeof return is a special case.

### BigInt and Symbol — the "why" your course skipped

**`BigInt` (the `n` suffix):** for numbers beyond `Number.MAX_SAFE_INTEGER` (2^53). Use when dealing with huge IDs, cryptography, or large math. For everyday JS, you won't need it.

**`Symbol`:** creates a unique key that can't collide with any other key. Use case: a library wants to attach hidden data to your object without risking overwriting your properties. You'll see this in React/Redux internals, but rarely use it yourself as a beginner.

### Template literals are more than syntax

```js
let name = "Akshay";
let age = 21;

// String concatenation (old way)
console.log("Hi, " + name + ", age " + age);

// Template literal (new way) — backticks + ${}
console.log(`Hi, ${name}, age ${age}`);
// The ${} is an EXPRESSION, not just a variable!
console.log(`Next year: ${age + 1}`);          // math
console.log(`Greeting: ${getGreeting()}`);     // function call
console.log(`Boolean: ${age > 18}`);           // comparison
```

### The one thing to remember

> **Primitives are copied by value — safe. Objects are copied by reference — careful. `null` means "intentionally nothing," `undefined` means "not set yet." And `typeof null === "object"` is a permanent bug you'll learn to live with.**

---

## 🔤 Key Vocabulary (memorize these)

| Term | Meaning |
|------|---------|
| **V8** | Google's JavaScript engine, written in C++, used in Chrome and Node.js |
| **Engine** | The program that runs a high-level language (V8 for JS, JVM for Java) |
| **C++** | A fast, low-level language used to build V8, browsers, OSes, games |
| **Compiler** | A program that translates source code into machine code |
| **Machine code** | 0s and 1s — the only thing CPUs can run |
| **Assembly** | Human-readable version of machine code (MOV A, 5 instead of 01010110) |
| **Bootstrapping** | Building a better version of X using a worse version of X, starting from something hand-made |
| **Self-hosting** | When a language's compiler is written in that same language |

---

## ❓ Questions I still have / things to revisit

- [ ] How does V8 actually translate my JS internally? (the deep pipeline — parser, AST, bytecode, JIT)
- [ ] What does JavaScript bytecode actually look like?
- [ ] What about other JS engines (SpiderMonkey, Hermes) — how are they different?
- [ ] Why is V8 faster than it used to be? (JIT compilation came later)
- [ ] What's the difference between compiled and interpreted languages? (your course probably covers this next)

---

## 🛠️ Things to try (hands-on)

- [ ] Open Chrome → F12 → Console → type `2 + 2`, `let x = 5`, etc.
- [ ] Open the V8 GitHub repo and look at one C++ file: `github.com/v8/v8`
- [ ] (Optional) If you have `cc` (C compiler) on your computer, compile a hello.c and see the machine code

---

## 📌 Lecture 1 — TL;DR

> **V8 = a C++ program in your browser that turns your JavaScript into machine code for the CPU to run. The chain of compilers that produced V8 has a clear bottom: a human, typing 0s and 0s, in the 1950s. That bottom is called bootstrapping.**

> **JavaScript has 7 primitive types (string, number, boolean, undefined, null, bigint, symbol) and 3 non-primitives (object, array, function). Primitives are copied by value; objects are copied by reference. A variable is a label, not a box.**
