import { Skeleton } from '@/components/skeleton'

export default function ProductLoading() {
  return (
    <div className="relative grid max-h-[860px] min-h-[800px] w-full grid-cols-3">
      <div className="col-span-2">
        <Skeleton className="w-full h-full" />
      </div>

      <div className="flex flex-col justify-center px-12">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="mt-2 h-3 w-full" />
        <Skeleton className="mt-2 h-3 w-4/5" />

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-5 font-semibold w-20 animate-pulse" />
          <span className="flex text-sm text-zinc-400 items-center gap-2 w-full">
            Em até 12x s/ juros de
            <Skeleton className="h-4 w-10" />
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white animate-pulse"
          disabled
        />
      </div>
    </div>
  )
}
