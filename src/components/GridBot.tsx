'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

interface QuickReply {
  label: string;
  response: string;
  followUp?: QuickReply[];
}

const quickReplies: QuickReply[] = [
  {
    label: '📦 What products do you supply?',
    response:
      'We supply 6 main categories:\n\n🐟 **Frozen Seafood** — Fish, shrimp, squid, crab\n🍗 **Poultry** — Halal chicken, nuggets, patties\n🥩 **Meat Products** — Beef, lamb, sausages\n🧀 **Dairy** — Milk, cheese, butter, cream\n🍟 **Frozen Snacks** — Fries, samosas, spring rolls\n🌾 **Rice & Grains** — Basmati, sella, lentils\n\nAll products are sourced from certified international suppliers!',
    followUp: [
      {
        label: '🐟 Tell me about seafood',
        response:
          'Our frozen seafood range includes:\n\n• Whole Fish & Fish Fillets\n• Tiger Prawns & Vannamei Shrimp\n• Squid & Octopus\n• Crab & Mixed Seafood\n\nAll sourced from certified aquaculture and wild-catch suppliers. Perfect for restaurants and supermarkets! 🎣',
      },
      {
        label: '🍗 Poultry options?',
        response:
          'Our 100% halal-certified poultry includes:\n\n• Whole Chicken & Chicken Breast\n• Chicken Legs & Wings\n• Chicken Nuggets & Strips\n• Marinated Chicken & Burger Patties\n\nFrom globally trusted brands with full halal certification! ✅',
      },
      {
        label: '💰 What about pricing?',
        response:
          'We offer competitive wholesale pricing with:\n\n• Volume discounts for large orders\n• Flexible MOQ (Minimum Order Quantity)\n• Custom pricing for long-term partners\n• Special rates for HORECA clients\n\nContact us for a personalized quote! 📋',
      },
    ],
  },
  {
    label: '🏢 Who do you serve?',
    response:
      'We serve businesses across the UAE:\n\n🏨 **HORECA** — Hotels, restaurants & catering companies\n🛒 **Supermarkets** — Retail & grocery chains\n📦 **Bulk Buyers** — Distributors & wholesalers\n🍰 **Bakeries** — Dairy and ingredient supply\n\nFrom small restaurants to large retail chains — we have the capacity for all! 💪',
    followUp: [
      {
        label: '📍 Do you deliver UAE-wide?',
        response:
          'Yes! We deliver across the entire UAE 🇦🇪\n\n• Dubai — Same/next-day delivery\n• Abu Dhabi, Sharjah, Ajman\n• Ras Al Khaimah, Fujairah, Umm Al Quwain\n\nAll deliveries maintain our cold chain integrity with temperature-controlled vehicles! ❄️🚚',
      },
      {
        label: '📋 Minimum order quantity?',
        response:
          'Our MOQ is flexible depending on the product category:\n\n• We work with both small and large orders\n• Custom MOQ arrangements for regular clients\n• Special bulk pricing for high-volume orders\n\nReach out and we\'ll find the best arrangement for your business! 🤝',
      },
    ],
  },
  {
    label: '✅ Why choose Grid Foods?',
    response:
      'Here\'s why 100+ UAE businesses trust us:\n\n✅ **Halal Certified** — All products meet halal standards\n❄️ **Cold Chain Integrity** — Unbroken from source to delivery\n🏆 **Premium Quality** — International food safety standards\n💰 **Competitive Pricing** — Best wholesale rates\n🚚 **Reliable Supply** — On-time, every time\n👤 **Dedicated Support** — Personal account manager\n\nWe don\'t just supply food — we become your trusted partner! 🤝',
  },
  {
    label: '📞 How can I contact you?',
    response:
      'Reach us anytime through:\n\n📞 **Phone:** +971 50 123 4567\n📧 **Email:** info@gridfoods.ae\n💬 **WhatsApp:** +971 50 123 4567\n📍 **Location:** Dubai, UAE\n\nOr fill out our contact form at gridfoods.ae/contact for a free quote! We respond within 24 hours. ⚡',
    followUp: [
      {
        label: '💬 WhatsApp us now',
        response:
          'Click the green WhatsApp button at the bottom-right of the screen to chat with our team directly! 💬\n\nOur sales team is available during business hours and typically responds within minutes. 🕐',
      },
      {
        label: '📝 Request a quote',
        response:
          'To get a custom quote:\n\n1. Visit our Contact page\n2. Fill in your details & requirements\n3. Our team will respond within 24 hours\n\nOr simply tell me what products you need and I\'ll guide you! 📋',
      },
    ],
  },
  {
    label: '🕐 Working hours?',
    response:
      'Our business hours:\n\n🕐 **Sunday – Thursday:** 8:00 AM – 6:00 PM\n🕐 **Friday:** 8:00 AM – 12:00 PM\n🕐 **Saturday:** Closed\n\nWhatsApp messages are monitored outside business hours for urgent orders! 📱',
  },
];

const GREETING: Message = {
  id: 0,
  text: 'Hey there! 👋 I\'m **Grid Bot**, your friendly food supply assistant!\n\nHow can I help you today? Pick a question below or type your own! 🍽️',
  sender: 'bot',
};

export default function GridBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [currentReplies, setCurrentReplies] = useState<QuickReply[]>(quickReplies);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const msgIdRef = useRef(1);
  const [showTeaser, setShowTeaser] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setShowTeaser(false);
      return;
    }
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;
    const startCycle = (delay: number) => {
      showTimer = setTimeout(() => {
        setShowTeaser(true);
        hideTimer = setTimeout(() => {
          setShowTeaser(false);
          startCycle(12000);
        }, 3500);
      }, delay);
    };
    startCycle(3000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isOpen]);

  const addBotMessage = (text: string, followUps?: QuickReply[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const id = msgIdRef.current++;
      setMessages((prev) => [...prev, { id, text, sender: 'bot' }]);
      setCurrentReplies(followUps || quickReplies);
    }, 600 + Math.random() * 400);
  };

  const handleQuickReply = (reply: QuickReply) => {
    const userId = msgIdRef.current++;
    setMessages((prev) => [...prev, { id: userId, text: reply.label, sender: 'user' }]);
    addBotMessage(reply.response, reply.followUp);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userId = msgIdRef.current++;
    setMessages((prev) => [...prev, { id: userId, text: trimmed, sender: 'user' }]);
    setInput('');

    // Simple keyword matching
    const lower = trimmed.toLowerCase();
    let response =
      'Thanks for your message! 😊\n\nFor specific inquiries, our team can help you best. Please reach out:\n\n📞 +971 50 123 4567\n📧 info@gridfoods.ae\n\nOr pick a topic below! 👇';

    if (lower.match(/product|supply|sell|offer|available/)) {
      const match = quickReplies.find((r) => r.label.includes('products'));
      if (match) {
        response = match.response;
      }
    } else if (lower.match(/price|cost|rate|cheap|expensive|bulk|wholesale/)) {
      response =
        'We offer competitive wholesale pricing with volume discounts! 💰\n\nFor a personalized quote:\n📞 Call: +971 50 123 4567\n📧 Email: info@gridfoods.ae\n\nOr visit our contact page for a free quote! 📋';
    } else if (lower.match(/deliver|ship|location|area|dubai|uae|abu dhabi/)) {
      response =
        'Yes! We deliver across the entire UAE 🇦🇪\n\nDubai (same/next-day), Abu Dhabi, Sharjah, Ajman, and all other emirates.\n\nAll deliveries maintain cold chain integrity! ❄️🚚';
    } else if (lower.match(/contact|phone|email|whatsapp|call|reach/)) {
      const match = quickReplies.find((r) => r.label.includes('contact'));
      if (match) {
        response = match.response;
      }
    } else if (lower.match(/halal|certif|quality|safe/)) {
      response =
        'All our products are:\n\n✅ Halal certified\n✅ International food safety compliant\n✅ ESMA standards approved\n✅ Sourced from certified producers\n\nQuality is our top priority! 🏆';
    } else if (lower.match(/chicken|poultry|meat|beef|lamb/)) {
      response =
        'We have a great range of halal meats! 🥩🍗\n\n**Poultry:** Whole chicken, breast, legs, wings, nuggets, strips\n**Meat:** Beef cuts, ground beef, lamb chops, mutton, sausages\n\nAll 100% halal certified! Contact us for pricing. ✅';
    } else if (lower.match(/fish|seafood|shrimp|prawn/)) {
      response =
        'Our seafood range includes: 🐟\n\n• Whole Fish & Fish Fillets\n• Tiger Prawns & Vannamei Shrimp\n• Squid, Octopus & Crab\n• Mixed Seafood\n\nFreshly frozen and sourced from certified suppliers worldwide! 🌊';
    } else if (lower.match(/hello|hi|hey|good|morning|afternoon/)) {
      response =
        'Hello! Welcome to Grid Foods! 👋😊\n\nI\'m here to help you with product info, pricing, and ordering. What would you like to know? Pick a topic below! 👇';
    }

    addBotMessage(response);
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Bold markdown
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <span key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} className="font-semibold">
                {part}
              </strong>
            ) : (
              part
            )
          )}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <>
      {/* Intermittent teaser bubble */}
      <AnimatePresence>
        {!isOpen && showTeaser && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: 10 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-[104px] right-[88px] z-50 bg-surface rounded-2xl rounded-br-sm shadow-xl px-4 py-2.5 border border-white/10 whitespace-nowrap pointer-events-none"
          >
            <p className="text-sm font-semibold text-white">Chat with me, Grid Bot 👋</p>
            {/* Arrow pointing right */}
            <span className="absolute right-[-7px] bottom-3 w-3.5 h-3.5 bg-surface border-r border-b border-white/10 rotate-[-45deg]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-[88px] right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-light text-white rounded-full flex items-center justify-center shadow-2xl transition-colors group"
            aria-label="Open Grid Bot chat"
          >
            {/* Food icon */}
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-2xl"
            >
              🧑‍🍳
            </motion.div>
            {/* Pulse ring */}
            <span className="absolute w-full h-full rounded-full border-2 border-primary animate-ping opacity-20" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-[160px] z-50 w-auto sm:w-[380px] h-[520px] max-h-[80vh] bg-dark-950 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center gap-3 shrink-0">
              <motion.div
                className="text-2xl"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🧑‍🍳
              </motion.div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm">Grid Bot</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/60 text-xs">Online — Ready to help!</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-accent text-white rounded-br-md'
                        : 'bg-surface text-gray-200 rounded-bl-md'
                    }`}
                  >
                    {formatMessage(msg.text)}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-surface rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                    <motion.span
                      className="w-2 h-2 bg-gray-500 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.span
                      className="w-2 h-2 bg-gray-500 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                    />
                    <motion.span
                      className="w-2 h-2 bg-gray-500 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                    />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {!isTyping && currentReplies.length > 0 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto shrink-0">
                {currentReplies.map((reply) => (
                  <motion.button
                    key={reply.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-accent/10 text-accent hover:bg-accent hover:text-white px-3 py-1.5 rounded-full font-medium transition-colors whitespace-nowrap"
                  >
                    {reply.label}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Input area */}
            <div className="border-t border-white/10 p-3 flex gap-2 shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-white/10 bg-surface text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-9 h-9 bg-accent hover:bg-accent-dark disabled:opacity-40 text-white rounded-lg flex items-center justify-center transition-colors shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
