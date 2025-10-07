
## Getting Started

### Set Up dependencies

```bash
npm run setup
```

### Launch both Frontend (Next.js) and Backend (FastAPI)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Compliance with the requirements

All requirements are implemented except:
- recommended getStaticProps()
- loading status (I had no time left for it)

## Limitations

In a real project and with more time, I would do better:
- error handling
- tests
- styling

## FastAPI

Because I experienced instability when using fakestoreapi.com and because Python's FastAPI is listed in one of valued technical skills in the job description, I created a small API using FastAPI that serves products/ and products/[id]
